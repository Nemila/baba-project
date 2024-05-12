"use server";

import { db } from "~/server/db";
import { newSpecialistValidator } from "~/validators/specialist-validators";

export const addNewSpecialist = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  try {
    const validatedData = newSpecialistValidator.parse(data);
    await db.specialist.create({
      data: validatedData,
    });
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "An error occured" };
  }
};
