import { db } from "~/server/db";

const DiseasesPage = async () => {
  const diseases = await db.disease.findMany();

  return (
    <main>
      <h2>Diseases</h2>
      <div>
        {diseases.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DiseasesPage;
