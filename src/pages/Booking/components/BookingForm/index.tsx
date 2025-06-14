import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Stack } from "@mui/material";

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState<number>(1);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || guests < 1) {
      alert("Por favor completa todos los campos");
      return;
    }
    navigate("/confirmation");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }} width="100%">
      <Stack spacing={3} sx={{ paddingX: 2 }}>
        <TextField
          label="Fecha"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <TextField
          label="Número de comensales"
          type="number"
          inputProps={{ min: 1, max: 10 }}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
        <Button type="submit" variant="contained">
          Reservar
        </Button>
      </Stack>
    </Box>
  );
}
