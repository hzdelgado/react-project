import { Typography, Box } from '@mui/material';

export default function Confirmation() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ¡Reserva confirmada!
      </Typography>
      <Typography variant="body1">
        Gracias por reservar en Little Lemon. Te esperamos pronto.
      </Typography>
    </Box>
  );
}
