"use server";
import { checkRole } from "~/lib/utils";
import { clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import {
  addNewDiseaseValidator,
  deleteDiseaseValidator,
} from "~/validators/disease-validators";
import { newSpecialistValidator } from "~/validators/specialist-validators";

export const addNewSpecialist = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedData = newSpecialistValidator.parse(data);
    await db.specialist.create({
      data: validatedData,
    });
    revalidatePath("/specialists");
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "An error occured" };
  }
};

export const addNewDisease = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const validatedData = addNewDiseaseValidator.parse(data);

  await db.disease.create({
    data: validatedData,
  });
};

export const deleteDisease = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const validatedData = deleteDiseaseValidator.parse(data);

  await db.disease.delete({
    where: {
      name: validatedData.name,
    },
  });
};

export async function setRole(formData: FormData) {
  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
    return { message: "Not Authorized" };
  }

  try {
    const res = await clerkClient.users.updateUser(
      formData.get("id") as string,
      {
        publicMetadata: { role: formData.get("role") },
      },
    );
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}
