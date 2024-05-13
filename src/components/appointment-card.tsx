import { clerkClient } from "@clerk/nextjs/server";
import type { Prisma } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { cancelAppointment } from "~/actions/user-actions";
import { Separator } from "~/components/ui/separator";
import SubmitButton from "./submit-button";
import { Badge } from "./ui/badge";

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
      className="relative flex flex-col items-start gap-2 rounded-md border p-4 shadow-sm"
    >
      <input
        type="hidden"
        contentEditable={false}
        value={data.id}
        name="appointmentId"
        required
      />

      <div>
        <p className="font-medium">Specialist: {specialistUser.fullName}</p>
        <p className="text-sm">{data.specialist.speciality}</p>
      </div>

      <Separator />

      <div>
        <p className="font-medium">Client: {clientUser.fullName}</p>
        <p className="text-sm">
          {clientUser.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <Separator />

      <div>
        <time
          className="font-medium"
          dateTime={data.appointmentDate.toDateString()}
        >
          {data.appointmentDate.toDateString()}
        </time>
        <p className="text-sm">Type: {data.type}</p>
      </div>

      <Badge
        variant={data.status === "cancelled" ? "destructive" : "default"}
        className="uppercase"
      >
        {data.status}
      </Badge>

      <SubmitButton
        variant={"ghost"}
        className="absolute bottom-3 right-3 ml-auto"
      >
        Cancel <Trash2 className="ml-4 h-4 w-4" />
      </SubmitButton>
    </form>
  );
};

export default AppointmentCard;
