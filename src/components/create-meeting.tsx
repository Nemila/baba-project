"use client";

import { useUser } from "@clerk/nextjs";
import Loading from "~/components/loading";

const CreateMeeting = () => {
  const { user } = useUser();
  if (!user) return <Loading />;
  return (
    <div>
      <h1>Welcome {user?.username}</h1>
    </div>
  );
};

export default CreateMeeting;
