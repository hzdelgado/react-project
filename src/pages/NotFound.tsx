import { Typography } from '@mui/material';

export default function NotFound() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1">
        La página que buscas no existe.
      </Typography>
    </>
  );
}
