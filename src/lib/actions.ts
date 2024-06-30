/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { type IEditSpecialistProfile } from "~/app/specialists/edit/page";
import { db } from "~/server/db";
import type { Roles } from "~/types/globals";
import { checkRole } from "./utils";

export const setUserRole = async (userId: string, role: Roles) => {
  if (!checkRole("admin")) throw new Error("Not authorized");

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
  if (!checkRole("admin")) throw new Error("Not authorized");
  const user = await clerkClient.users.getUser(data.userId);

  await db.specialist.create({
    data: {
      ...data,
      fullName:
        user.fullName ?? user.username ?? user.emailAddresses[0]!.emailAddress,
    },
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

  const specialist = await db.specialist.findUnique({
    where: {
      id: Number(specialistId),
    },
  });

  const patient = await clerkClient.users.getUser(patientClerkId as string);
  if (!patient || !specialist)
    throw new Error("Patient or Specialist not found");

  await db.appointment.create({
    data: {
      meetingDate: new Date(date as string),
      type: "teleconsultation",
      patientClerkId: patient.id,
      specialistClerkId: specialist?.userId,
      patientName:
        patient.fullName ??
        patient.username ??
        patient.emailAddresses[0]!.emailAddress,
      specialist: {
        connect: { id: Number(specialistId) },
      },
    },
  });

  revalidatePath("/specialists/[id]");
};

export const confirmAppointment = async (values: {
  meetingTime: string;
  meetingLink: string;
  appointmentId: number;
}) => {
  console.log(values);
  await db.appointment.update({
    where: {
      id: values.appointmentId,
    },
    data: {
      meetingTime: values.meetingTime,
      meetingLink: values.meetingLink,
      status: "confirmed",
    },
  });

  revalidatePath("/appointments");
};

export const cancelAppointment = async (appointmentId: number) => {
  await db.appointment.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: "cancelled",
    },
  });

  revalidatePath("/appointments");
};

export const deleteAppointment = async (appointmentId: number) => {
  if (!checkRole("admin")) throw new Error("Not authorized");

  const appointment = await db.appointment.findUnique({
    where: {
      id: appointmentId,
    },
  });

  if (
    appointment?.status !== "cancelled" &&
    appointment?.status !== "completed"
  )
    throw new Error(
      "Appointment need to be completed or cancelled to be deleted",
    );

  await db.appointment.delete({
    where: {
      id: appointmentId,
    },
  });

  revalidatePath("/appointments");
};

export const updateMedicalDetails = async (data: any) => {
  const user = await currentUser();
  if (!user) throw new Error("Not Authorized");

  await db.medicalDetails.upsert({
    where: {
      patientClerkId: user.id,
    },
    create: {
      patientClerkId: user.id,
      patientName: user.fullName,
      ...data,
    },
    update: {
      ...data,
    },
  });

  console.log(data);
};
