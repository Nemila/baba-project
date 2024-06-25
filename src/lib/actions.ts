"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { type IEditSpecialistProfile } from "~/app/specialists/edit/page";
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

export const editSpecialistProfile = async (
  userId: string,
  data: IEditSpecialistProfile,
) => {
  await db.specialist.update({
    where: {
      userId: userId,
    },
    data: {
      ...(data.description && { description: data.description }),
      ...(data.address.longitude &&
        data.address.latitude &&
        data.address.location && { location: data.address }),
      ...(data.socialLinks.twitter &&
        data.socialLinks.instagram &&
        data.socialLinks.facebook && { socialLinks: data.socialLinks }),
    },
  });
};

export const createAppointment = async (formData: FormData) => {
  const date = formData.get("date");
  const patientClerkId = formData.get("patientClerkId");
  const specialistId = formData.get("specialistId");

  if (!date || !patientClerkId || !specialistId)
    throw new Error("All fields are required");

  await db.appointment.create({
    data: {
      appointmentDate: new Date(date as string),
      type: "teleconsultation",
      userId: patientClerkId as string,
      specialist: {
        connect: { id: Number(specialistId) },
      },
    },
  });

    revalidatePath("/");
};
