import type { Metadata } from "next";
import Meeting from "~/components/meeting";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Meeting ${params.id}`,
  };
}

const MeetingPage = ({ params }: Props) => {
  return (
    <div className="space-y-4 p-4">
      <p>MeetingPage</p>
      <Meeting id={params.id} />
    </div>
  );
};

export default MeetingPage;
