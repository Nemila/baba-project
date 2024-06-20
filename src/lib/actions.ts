"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import type { Roles } from "~/types/globals";

export const setUserRole = async (userId: string, role: Roles) => {
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      role: role,
    },
  });
  revalidatePath("/dashboard");
};

export const addSpecialist = async (data: {
  userId: string;
  speciality: string;
  experience: number;
}) => {
  await db.specialist.create({
    data: data,
  });
  revalidatePath("/dashboard");
};
