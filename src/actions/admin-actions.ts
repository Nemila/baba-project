"use server";

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
