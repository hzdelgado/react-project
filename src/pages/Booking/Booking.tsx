import { Stack, Typography } from "@mui/material";
import BookingForm from "../../components/BookingForm";
import { PageSection } from "../../components/PageSection";
import { Background } from "./components/Background";
export default function Booking() {
  return (
    <>
      <Background />
      <Stack display="flex" flexDirection="column">
        <PageSection>
          <Typography variant="h2" gutterBottom>
            Reservar una mesa
          </Typography>
          <BookingForm />
        </PageSection>
      </Stack>
    </>
  );
}
