import { Typography, Stack, Button } from "@mui/material";
import { Background } from "../Booking/components/Background";
import { PageSection } from "../../components/PageSection";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <Background/>
      <PageSection>
        <Stack
          display="flex"
          flexDirection="column"
          sx={{ mt: 6, maxWidth: 500, width: "100%", mx: "auto", gap: 4 }}
        >
          <Typography variant="h2" gutterBottom>
            ¡Reserva confirmada!
          </Typography>
          <Typography variant="body1">
            Gracias por reservar en Little Lemon. Te esperamos pronto.
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleNavigate}
          >
            REGRESAR
          </Button>
        </Stack>
      </PageSection>
    </>
  );
}
