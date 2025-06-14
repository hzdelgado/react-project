import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '2rem 0',
        marginTop: 'auto',
        bottom: 0
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Little Lemon. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
