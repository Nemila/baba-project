import * as z from "zod";

export const newAppointmentValidator = z.object({
  userId: z.string(),
  date: z.coerce.date(),
  type: z.enum(["in_person", "teleconsultation"]),
  specialistId: z.coerce.number(),
});

export const cancelAppointmentValidator = z.object({
  appointmentId: z.coerce.number(),
});
