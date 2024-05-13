"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
import { env } from "~/env";

export const tokenProvider = async () => {
  const apiKey = env.NEXT_PUBLIC_STREAM_VIDEO_KEY;
  const secret = env.STREAM_VIDEO_SECRET;

  if (!apiKey || !secret) throw new Error("Stream API KEY or Secret undefined");

  const user = await currentUser();
  if (!user) throw new Error("Not authorized");

  const client = new StreamClient(apiKey, secret, { timeout: 3000 });
  const expirationTime = Math.round(Date.now() / 1000) + 60 * 60;
  const issuedAt = Math.round(Date.now() / 1000) - 60;
  const token = client.createToken(user.id, expirationTime, issuedAt);

  return token;
};
