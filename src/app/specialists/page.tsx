import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

const SpecialistsPage = async () => {
  const data = await db.specialist.findMany();

  return (
    <div className="p-4">
      <p>Specialist</p>
      <div className="max-w-md space-y-4">
        {data.map((item) => (
          <SpecialistCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
