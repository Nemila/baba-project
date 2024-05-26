import { Search } from "lucide-react";
import SpecialistCard from "~/components/specialist-card";
import { db } from "~/server/db";

const SpecialistsPage = async () => {
  const data = await db.specialist.findMany();

  return (
    <div className="container flex flex-1 flex-col gap-6 px-4 py-8">
      <div className="flex flex-wrap gap-4">
        <label className="input input-bordered flex flex-1 items-center gap-4">
          <Search className="h-5 w-5 shrink-0" />
          <input
            type="text"
            placeholder="Search specialist"
            className="flex-1"
          />
        </label>

        <label className="input input-bordered flex flex-1 items-center gap-4">
          <input
            type="number"
            placeholder="Min year experience..."
            className="flex-1"
          />
        </label>

        <label className="input input-bordered flex flex-1 items-center gap-4">
          <input
            type="number"
            placeholder="Max year experience..."
            className="flex-1"
          />
        </label>

        <label className="input input-bordered flex flex-1 items-center gap-4">
          <input type="number" placeholder="Min rating" className="flex-1" />
        </label>

        <label className="input input-bordered flex flex-1 items-center gap-4">
          <input type="number" placeholder="Max rating" className="flex-1" />
        </label>

        <button className="btn btn-primary flex-1">Search</button>
      </div>

      <div>
        <h1 className="text-2xl font-black">Specialists</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...data, ...data, ...data, ...data, ...data, ...data].map((item) => (
          <SpecialistCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsPage;
