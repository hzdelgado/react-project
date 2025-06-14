import { Stack } from "@mui/material";
import { PageSection } from "../../components/PageSection";
import { Background } from "./components/Background";
import BookingForm from "./components/BookingForm";
export default function Booking() {
  return (
    <>
      <Background title={'Reservar una mesa'}/>
      <Stack display="flex" flexDirection="column">
        <PageSection>
          <BookingForm />
        </PageSection>
      </Stack>
    </>
  );
}
