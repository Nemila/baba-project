import { addNewSpecialist } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h2>Admin Dahboard</h2>

      <form
        action={addNewSpecialist}
        className="flex max-w-sm flex-col space-y-4"
      >
        <Input type="text" name="userId" placeholder="User ID" required />
        <Input
          type="text"
          name="speciality"
          placeholder="Specialite"
          required
        />
        <Input
          type="number"
          name="experience"
          placeholder="Experience"
          required
        />
        <Textarea
          name="description"
          placeholder="Description"
          required
        ></Textarea>
        <SubmitButton>Add Specialist</SubmitButton>
      </form>
    </div>
  );
};

export default AdminDashboard;
