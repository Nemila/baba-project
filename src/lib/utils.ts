import { auth } from "@clerk/nextjs/server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Roles } from "~/types/globals";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth();
  return sessionClaims?.metadata.role === role;
};
