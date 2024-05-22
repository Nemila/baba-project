import { addNewDisease } from "~/actions/admin-actions";
import SubmitButton from "~/components/submit-button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const NewDiseaseForm = () => {
  return (
    <form
      className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
      action={addNewDisease}
    >
      <h2>New Disease Form</h2>
      <Input placeholder="Name" name="name" required />
      <Textarea
        required
        name="description"
        placeholder="description"
      ></Textarea>
      <Textarea required name="causes" placeholder="causes"></Textarea>
      <Textarea
        required
        name="transmission"
        placeholder="transmission"
      ></Textarea>
      <Textarea required name="treatment" placeholder="treatment"></Textarea>
      <Textarea required name="prevention" placeholder="prevention"></Textarea>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default NewDiseaseForm;
