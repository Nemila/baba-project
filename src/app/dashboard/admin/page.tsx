import DeleteDiseaseForm from "./_components/delete-disease-form";
import NewDiseaseForm from "./_components/new-disease-form";
import NewSpecialistForm from "./_components/new-specialist-form";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2>Admin Dahboard</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <DeleteDiseaseForm />
        <NewSpecialistForm />
        <NewDiseaseForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
