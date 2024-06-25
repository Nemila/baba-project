import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import AppointmentCard from "~/components/appointment-card";
import { db } from "~/server/db";

const AppointmentViewPage = async () => {
  const user = await currentUser();
  if (!user) return notFound();

  const appointments = await db.appointment.findMany({
    where: {
      OR: [
        {
          patientClerkId: user.id,
        },
        {
          specialistClerkId: user.id,
        },
      ],
    },
    include: {
      specialist: true,
    },
  });

  return (
    <div className="container flex flex-1 flex-col gap-6 px-4 py-8">
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Gestion des Consultations
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((item) => (
          <AppointmentCard key={item.id} appointment={item} />
        ))}
        {/* <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard /> */}
      </div>
    </div>
  );
};

export default AppointmentViewPage;
