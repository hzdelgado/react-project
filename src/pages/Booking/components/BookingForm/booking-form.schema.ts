import * as yup from "yup";

export const bookingSchema = yup
  .object({
    firstName: yup
      .string()
      .required("El nombre es obligatorio")
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Nombre no válido"),
    lastName: yup
      .string()
      .required("El apellido es obligatorio")
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Apellido no válido"),
    date: yup
      .string()
      .required("La fecha es obligatoria")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Formato de fecha inválido (ej. 2025-06-14)"
      ),

    time: yup
      .string()
      .required("La hora es obligatoria")
      .oneOf(["18:00", "19:00", "20:00"], "Horario no válido"),

    guests: yup
      .string()
      .required("Número de personas requerido")
      .matches(/^(?:[1-9]|10)$/, "Debe ser un número entre 1 y 10"),
  })
  .required();

export type BookingFormData = yup.InferType<typeof bookingSchema>;

