import { addNewSpecialist } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";

const NewSpecialistForm = () => {
  return (
    <form
      action={addNewSpecialist}
      className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
    >
      <h2>Add New Specialist</h2>
      <input
        className="input input-bordered"
        type="text"
        name="userId"
        placeholder="User ID"
        required
      />
      <input
        className="input input-bordered"
        type="text"
        name="speciality"
        placeholder="Specialite"
        required
      />
      <input
        className="input input-bordered"
        type="number"
        name="experience"
        placeholder="Experience"
        required
      />
      <textarea
        className="textarea textarea-bordered"
        name="description"
        placeholder="Description"
        required
      ></textarea>
      <SubmitButton>Add Specialist</SubmitButton>
    </form>
  );
};

export default NewSpecialistForm;
