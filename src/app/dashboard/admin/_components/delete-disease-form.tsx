import { deleteDisease } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";
import { db } from "~/server/db";
import { DiseaseCombobox } from "./disease-combobox";

const DeleteDiseaseForm = async () => {
  const diseases = await db.disease.findMany();

  return (
    <form
      action={deleteDisease}
      className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
    >
      <h2>Delete Disease</h2>
      <DiseaseCombobox diseases={diseases} />
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default DeleteDiseaseForm;
