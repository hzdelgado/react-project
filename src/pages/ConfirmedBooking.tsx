import { Typography, Box, Stack } from "@mui/material";
import { Background } from "./Booking/components/Background";
import { PageSection } from "../components/PageSection";

export default function Confirmation() {
  return (
    <>
      <Background />
      <PageSection>
        <Stack display="flex" flexDirection="column" alignItems={"center"}>
          <Typography variant="h2" gutterBottom>
            ¡Reserva confirmada!
          </Typography>
          <Typography variant="body1">
            Gracias por reservar en Little Lemon. Te esperamos pronto.
          </Typography>
        </Stack>
      </PageSection>
    </>
  );
}
