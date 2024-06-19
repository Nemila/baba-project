import { addNewDisease } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";

const NewDiseaseForm = () => {
  return (
    <form
      className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
      action={addNewDisease}
    >
      <h2>New Disease Form</h2>
      <input
        placeholder="Name"
        name="name"
        className="input input-bordered"
        required
      />
      <textarea
        required
        name="description"
        className="textarea textarea-bordered"
        placeholder="description"
      ></textarea>
      <textarea
        required
        name="causes"
        className="textarea textarea-bordered"
        placeholder="causes"
      ></textarea>
      <textarea
        required
        name="transmission"
        className="textarea textarea-bordered"
        placeholder="transmission"
      ></textarea>
      <textarea
        required
        name="treatment"
        className="textarea textarea-bordered"
        placeholder="treatment"
      ></textarea>
      <textarea
        required
        name="prevention"
        className="textarea textarea-bordered"
        placeholder="prevention"
      ></textarea>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default NewDiseaseForm;
