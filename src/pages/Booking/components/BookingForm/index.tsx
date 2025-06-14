import { Box, Button, TextField, Stack, Typography, MenuItem } from "@mui/material";
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
        <Box component="label" htmlFor="firstName">
          <Typography variant="subtitle1">Nombre:</Typography>
          <TextField
            id="firstName"
            {...register("firstName")}
            fullWidth
          />
          {errors.firstName && (
            <Typography color="error">
              {errors.firstName.message}
            </Typography>
          )}
        </Box>

        <Box component="label" htmlFor="lastName">
          <Typography variant="subtitle1">Apellido:</Typography>
          <TextField
            id="lastName"
            {...register("lastName")}
            fullWidth
          />
          {errors.lastName && (
            <Typography color="error">
              {errors.lastName.message}
            </Typography>
          )}
        </Box>
        <Box  component="label" htmlFor="date">
           <Typography variant="subtitle1">Fecha:</Typography>
          <TextField id="date" type="date" {...register("date")} fullWidth InputLabelProps={{ shrink: true }} />
          {errors.date && <Typography color="error">{errors.date.message}</Typography>}
        </Box>

        <Box component="label" htmlFor="time">
          <Typography variant="subtitle1">Hora:</Typography>
          <TextField
            id="time"
            select
            fullWidth
            defaultValue=""
            {...register("time")}
          >
            <MenuItem value="18:00">18:00</MenuItem>
            <MenuItem value="19:00">19:00</MenuItem>
            <MenuItem value="20:00">20:00</MenuItem>
          </TextField>
          {errors.time && (
            <Typography color="error">{errors.time.message}</Typography>
          )}
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
