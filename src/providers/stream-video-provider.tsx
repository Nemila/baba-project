"use client";
import { useUser } from "@clerk/nextjs";
import {
  StreamVideo,
  StreamVideoClient,
  type User,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useEffect, useState } from "react";
import { tokenProvider } from "~/actions/stream-actions";
import Loading from "~/components/loading";
import { env } from "~/env";

type Props = { children: React.ReactNode };

export const StreamVideoProvider = ({ children }: Props) => {
  const videoClient = useInitializeClient();

  if (!videoClient) return <Loading />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

const useInitializeClient = () => {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(
    null,
  );

  useEffect(() => {
    if (!isLoaded) return;
    if (!user?.id) return;

    const streamUser: User = {
      id: user.id,
      name: user.username ?? user.id,
      image: user.imageUrl,
    };

    const client = new StreamVideoClient({
      apiKey: env.NEXT_PUBLIC_STREAM_VIDEO_KEY,
      user: streamUser,
      tokenProvider: tokenProvider,
    });

    setVideoClient(client);

    () => {
      client.disconnectUser().catch((err) => console.log(err));
      setVideoClient(null);
    };
  }, [isLoaded, user?.id, user?.username, user?.imageUrl]);

  return videoClient;
};
