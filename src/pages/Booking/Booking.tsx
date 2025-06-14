import { Stack } from "@mui/material";
import { PageSection } from "../../components/PageSection";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import BookingForm from "./components/BookingForm";
export default function Booking() {
  return (
    <>
      <Background />
      <Header />
      <Stack display="flex" flexDirection="column">
        <PageSection>
          <BookingForm />
        </PageSection>
      </Stack>
    </>
  );
}
