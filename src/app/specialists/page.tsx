import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

const SpecialistsPage = async () => {
  const data = await db.specialist.findMany();

  return (
    <div className="space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Find a Specialist
      </h1>

      <div className="max-w-md space-y-4">
        {data.map((item) => (
          <SpecialistCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
