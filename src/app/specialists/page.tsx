import { db } from "~/server/db";

const SpecialistsPage = async () => {
  const data = await db.specialist.findMany();

  return (
    <div>
      <p>Specialist</p>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
