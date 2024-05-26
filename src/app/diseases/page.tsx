import DiseaseCard from "~/components/disease-card";

const DiseasesPage = async () => {
  return (
    <div className="container flex flex-1 flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-black">Diseases</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
        <DiseaseCard />
      </div>
    </div>
  );
};

export default DiseasesPage;
