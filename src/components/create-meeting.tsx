"use client";

import { useUser } from "@clerk/nextjs";
import { type Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useState } from "react";
import Loading from "~/components/loading";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { env } from "~/env";
import { Loader2 } from "lucide-react";

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

      await call.getOrCreate({
        data: {
          custom: {
            description: descriptionValue,
          },
        },
      });

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

      <div className="flex max-w-md flex-col gap-4 rounded-md bg-muted p-4">
        <h2 className="text-2xl font-bold">Create a new meeting</h2>
        <DescriptionInput
          value={descriptionValue}
          setDescriptionValue={setDescriptionValue}
        />

        <Button disabled={isCreatingMeeting} onClick={createMeeting}>
          {isCreatingMeeting ? "Loading" : "Create Meeting"}
          {isCreatingMeeting && (
            <Loader2 className="ml-4 h-4 w-4 animate-spin" />
          )}
        </Button>
      </div>

      {call && <MeetingLink call={call} />}
    </div>
  );
};

interface DescriptionInputProps {
  value: string;
  setDescriptionValue: (value: string) => void;
}

const DescriptionInput = ({
  value,
  setDescriptionValue,
}: DescriptionInputProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="space-y-2">
      <p className="text-lg font-medium">Meeting Info</p>

      <Label htmlFor="description" className="flex items-center gap-2">
        <Checkbox
          id="description"
          onCheckedChange={() => {
            setActive((prev) => !prev);
            setDescriptionValue("");
          }}
        />

        <span>Add description</span>
      </Label>

      {active && (
        <Label className="flex flex-col gap-2">
          <span>Description</span>
          <Textarea
            value={value}
            onChange={(e) => setDescriptionValue(e.currentTarget.value)}
            maxLength={350}
          ></Textarea>
        </Label>
      )}
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
