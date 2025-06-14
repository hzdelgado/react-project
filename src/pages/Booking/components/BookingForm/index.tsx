import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema, type BookingFormData } from "./booking-form.schema";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: yupResolver(bookingSchema),
  });
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/confirmation");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 6 }}
      width="100%"
    >
      <Stack spacing={3} sx={{ paddingX: 2 }}>
        <Box  component="label" htmlFor="date">
           <Typography variant="subtitle1">Fecha:</Typography>
          <TextField id="date" type="date" {...register("date")} fullWidth InputLabelProps={{ shrink: true }} />
          {errors.date && <Typography color="error">{errors.date.message}</Typography>}
        </Box>
        <Box component="label" htmlFor="guests">
          <Typography variant="subtitle1">Número de comensales:</Typography>
          <TextField
            id="guests"
            type="number"
            {...register("guests")}
            fullWidth
          />
          {errors.guests && <Typography color="error">{errors.guests.message}</Typography>}
        </Box>
        <Button type="submit" variant="contained">
          Reservar
        </Button>
      </Stack>
    </Box>
  );
}
