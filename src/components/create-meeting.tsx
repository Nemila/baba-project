"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient, type Call } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Loading from "~/components/loading";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { env } from "~/env";

const CreateMeeting = () => {
  const client = useStreamVideoClient();

  const { toast } = useToast();

  const [descriptionValue, setDescriptionValue] = useState("");
  const [call, setCall] = useState<Call | undefined>();
  const [isCreatingMeeting, setIsCreatingMeeting] = useState(false);

  const { user } = useUser();

  if (!user || !client) return <Loading />;

  async function createMeeting() {
    if (!client || !user) return;
    setIsCreatingMeeting(true);

    try {
      const id = crypto.randomUUID();

      const call = client.call("default", id);

      await call.getOrCreate();

      setCall(call);
      setIsCreatingMeeting(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description: "Failed to create meeting, please try again later",
      });
    }
  }

  return (
    <div className="space-y-4 p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome {user?.username}!
      </h1>

      <Button disabled={isCreatingMeeting} onClick={createMeeting}>
        {isCreatingMeeting ? "Loading" : "Create Meeting"}
        {isCreatingMeeting && <Loader2 className="ml-4 h-4 w-4 animate-spin" />}
      </Button>

      {call && <MeetingLink call={call} />}
    </div>
  );
};

interface MeetingLinkProps {
  call: Call;
}

const MeetingLink = ({ call }: MeetingLinkProps) => {
  const meetingLink = `${env.NEXT_PUBLIC_URL}/meeting/${call.id}`;
  return (
    <div>
      <p>{meetingLink}</p>
    </div>
  );
};

export default CreateMeeting;
