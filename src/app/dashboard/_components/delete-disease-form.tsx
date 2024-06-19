import { deleteDisease } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";
import { db } from "~/server/db";

const DeleteDiseaseForm = async () => {
  const diseases = await db.disease.findMany();

  return (
    <form
      action={deleteDisease}
      className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
    >
      <h2>Delete Disease</h2>
      <select name="name" className="select select-bordered capitalize">
        {diseases.map((item) => (
          <option key={item.id} value={item.name} className="capitalize">
            {item.name}
          </option>
        ))}
      </select>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default DeleteDiseaseForm;
