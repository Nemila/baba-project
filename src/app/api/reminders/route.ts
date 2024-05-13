import { TwitchResetPasswordEmail } from "emails";
import { Resend } from "resend";
import { db } from "~/server/db";
import { clerkClient } from "@clerk/nextjs/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const appointments = await db.appointement.findMany({
      where: {
        status: "scheduled",
        appointmentDate: {
          gt: new Date(),
        },
      },
    });

    const senderEmail = "onboarding@resend.dev";

    const ids = [];

    for (const appointment of appointments) {
      const user = await clerkClient.users.getUser(appointment.userId);
      if (!user.primaryEmailAddress?.emailAddress) continue;

      const { data, error } = await resend.emails.send({
        from: `MaliMed <${senderEmail}>`,
        to: user.primaryEmailAddress.emailAddress,
        subject: "Reminder: Upcoming Medical Appointment",
        react: TwitchResetPasswordEmail({
          username: user.fullName ?? user.primaryEmailAddress.emailAddress,
          appointmentDate: appointment.appointmentDate,
          senderEmail,
        }) as React.ReactElement,
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      ids.push(data?.id);
    }

    return Response.json({ message: "All done", data: ids });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
