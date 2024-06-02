// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";
// import { DatePicker } from "~/components/date-picker";
import { bookAppointment } from "~/actions/user-actions";
import SubmitButton from "~/components/submit-button";

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

const BookPage = async ({ searchParams }: Props) => {
  return (
    <div className="p-4">
      <p>BookPage </p>

      <form action={bookAppointment} className="flex max-w-sm flex-col gap-4">
        <input
          required
          type="hidden"
          name="specialistId"
          placeholder="Specialist Id"
          contentEditable={false}
          value={searchParams.specialistId}
        />

        {/* <DatePicker /> */}

        {/* <Select name="type">
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in_person">In Person</SelectItem>
            <SelectItem value="teleconsultation">Teleconsultation</SelectItem>
          </SelectContent>
        </Select> */}

        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
};

export default BookPage;
