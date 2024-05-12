type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

const BookPage = ({ searchParams }: Props) => {
  return (
    <div className="p-4">
      <p>BookPage {JSON.stringify(searchParams)}</p>
    </div>
  );
};

export default BookPage;
