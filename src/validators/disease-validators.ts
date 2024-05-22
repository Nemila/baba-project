import * as z from "zod";

export const addNewDiseaseValidator = z.object({
  name: z.string().toLowerCase(),
  description: z.string(),
  causes: z.string(),
  transmission: z.string(),
  prevention: z.string(),
  treatment: z.string(),
});

export const deleteDiseaseValidator = z.object({
  name: z.string(),
});

export const updateDiseaseValidator = z.object({
  id: z.coerce.number(),
  name: z.string().toLowerCase().optional(),
  description: z.string().optional(),
  causes: z.string().optional(),
  transmission: z.string().optional(),
  prevention: z.string().optional(),
  treatment: z.string().optional(),
});

export const addSymptomToDiseaseValidator = z.object({
  diseaseId: z.number(),
  symptomId: z.number(),
});

// SYMPTOMS
export const addSymptomValidator = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export const updateSymptomValidator = z.object({
  id: z.coerce.number(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export const deleteSymptomValidator = z.object({
  id: z.coerce.number(),
});
