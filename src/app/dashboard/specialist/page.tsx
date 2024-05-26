import { redirect } from "next/navigation";
import { checkRole } from "~/lib/utils";

const SpecialistDashboard = async () => {
  if (!checkRole("specialist")) redirect("/");

  return (
    <div className="space-y-4 p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Specialist Dashboard
      </h1>
    </div>
  );
};

export default SpecialistDashboard;
