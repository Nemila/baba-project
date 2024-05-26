import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import AppointmentCard from "~/components/appointment-card";
import { db } from "~/server/db";

const AppointmentViewPage = async () => {
  const user = await currentUser();
  if (!user) return notFound();

  const appointments = await db.appointement.findMany({
    where: {
      OR: [
        {
          specialist: {
            userId: user.id,
          },
        },
        {
          userId: user.id,
        },
      ],
    },
    include: { specialist: true },
    orderBy: { appointmentDate: "asc" },
  });

  return (
    <div className="container flex flex-1 flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-black">Appointments</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((item) => (
          <AppointmentCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentViewPage;
