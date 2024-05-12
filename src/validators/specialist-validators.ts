import * as z from "zod";

export const newSpecialistValidator = z.object({
  userId: z.string(),
  experience: z.coerce.number().min(1),
  speciality: z.string().toLowerCase(),
  description: z.string(),
});
