import { clerkClient } from "@clerk/nextjs/server";
import type { Prisma } from "@prisma/client";
import { cancelAppointment } from "~/actions/user-actions";
import { cn } from "~/lib/utils";
import SubmitButton from "./submit-button";

type Props = {
  data: Prisma.AppointementGetPayload<{
    include: {
      specialist: true;
    };
  }>;
};

const AppointmentCard = async ({ data }: Props) => {
  const specialistUser = await clerkClient.users.getUser(
    data.specialist.userId,
  );
  const clientUser = await clerkClient.users.getUser(data.userId);

  return (
    <form
      action={cancelAppointment}
      className="flex flex-col gap-2 rounded-md border bg-base-100 p-4 shadow-sm"
    >
      <input
        type="hidden"
        contentEditable={false}
        value={data.id}
        name="appointmentId"
        required
      />

      <span
        className={cn(
          "badge badge-outline",
          data.status === "cancelled" ? "badge-error" : "badge-primary",
        )}
      >
        {data.status}
      </span>

      <div>
        <p className="font-medium">Specialist: {specialistUser.fullName}</p>
        <p className="text-sm">{data.specialist.speciality}</p>
      </div>

      <div>
        <p className="font-medium">Client: {clientUser.fullName}</p>
        <p className="text-sm">
          {clientUser.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <div>
        <time
          className="font-medium"
          dateTime={data.appointmentDate.toDateString()}
        >
          {data.appointmentDate.toDateString()}
        </time>
        <p className="text-sm">Type: {data.type}</p>
      </div>

      <SubmitButton className="btn-outline mt-4">Cancel</SubmitButton>
    </form>
  );
};

export default AppointmentCard;
