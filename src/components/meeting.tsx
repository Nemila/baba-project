"use client";
import { useUser } from "@clerk/nextjs";
import {
  type Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import Loading from "~/components/loading";
import useLoadCall from "~/hooks/useLoadCall";
import { Button } from "./ui/button";

type Props = { id: string };

const Meeting = ({ id }: Props) => {
  const { isLoaded } = useUser();
  const { call, callLoading } = useLoadCall(id);

  if (callLoading || !isLoaded) return <Loading />;
  if (!call) return <p>Call Not Found</p>;

  return (
    <>
      <StreamCall call={call}>
        <StreamTheme>
          <Button onClick={async () => await call.join()}>Join Meeting</Button>
          <MeetingScreen call={call} />
        </StreamTheme>
      </StreamCall>
    </>
  );
};

const MeetingScreen = ({ call }: { call: Call }) => {
  const { useCallEndedAt, useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  const callEndedAt = useCallEndedAt();
  const callHasEnded = !!callEndedAt;

  if (callHasEnded) return <p>Call has ended</p>;

  return (
    <>
      <SpeakerLayout />
      <CallControls />
      {isOwner && (
        <Button variant={"destructive"} onClick={call.endCall}>
          End call for everyone
        </Button>
      )}
    </>
  );
};

export default Meeting;
