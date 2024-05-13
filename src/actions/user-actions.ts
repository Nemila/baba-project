"use server";

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import {
  cancelAppointmentValidator,
  newAppointmentValidator,
} from "~/validators/appointment-validators";

export const bookAppointment = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");

    const validatedData = newAppointmentValidator.parse({
      ...data,
      userId: user.id,
    });

    const specialist = await db.specialist.findUnique({
      where: {
        id: validatedData.specialistId,
      },
      include: {
        appointements: true,
      },
    });

    if (!specialist) throw new Error("Not Found");
    const isDateTaken = specialist.appointements.find(
      (item) => item.appointmentDate.getTime() === validatedData.date.getTime(),
    );
    if (isDateTaken) return { message: "Date is taken" };

    await db.appointement.create({
      data: {
        appointmentDate: validatedData.date,
        type: validatedData.type,
        userId: validatedData.userId,
        specialist: {
          connect: {
            id: validatedData.specialistId,
          },
        },
      },
    });
    revalidatePath("/dashboard");
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong" };
  }
};

export const cancelAppointment = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const validatedData = cancelAppointmentValidator.parse(data);

    await db.appointement.update({
      where: {
        id: validatedData.appointmentId,
      },
      data: {
        status: "cancelled",
      },
    });

    revalidatePath("/dashboard");
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong" };
  }
};
