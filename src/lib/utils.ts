import { currentUser } from "@clerk/nextjs/server";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Roles } from "~/types/globals";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkRole = async (role: Roles) => {
  try {
    const user = await currentUser();
    if (!user) return false;
    if (user.publicMetadata?.role === role) return true;
  } catch (error) {
    console.error(error);
  }
};
