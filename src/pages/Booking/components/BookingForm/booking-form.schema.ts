import * as yup from "yup";
export const bookingSchema = yup
  .object({
    date: yup
      .string()
      .oneOf(["18:00", "19:00", "20:00"], "Horario no válido")
      .required("La fecha es obligatoria"),
    guests: yup
      .number()
      .required("Número de personas requerido")
      .min(1, "Debe haber al menos 1 persona")
      .max(10, "Máximo 10 personas"),
  })
  .required();

export type BookingFormData = yup.InferType<typeof bookingSchema>;
