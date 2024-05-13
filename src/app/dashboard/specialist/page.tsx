import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import AppointmentCard from "~/components/appointment-card";
import { db } from "~/server/db";

const SpecialistDashboard = async () => {
  const user = await currentUser();
  if (!user) return notFound();

  const specialist = await db.specialist.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      appointements: {
        orderBy: {
          appointmentDate: "asc",
        },
      },
    },
  });

  if (!specialist) return notFound();

  return (
    <div className="space-y-4 p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Sopecialist Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {specialist.appointements.map((item) => (
          <AppointmentCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistDashboard;
