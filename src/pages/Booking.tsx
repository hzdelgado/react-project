import { Typography } from '@mui/material';
import BookingForm from '../components/BookingForm';

export default function Booking() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reservar una mesa
      </Typography>
      <BookingForm />
    </>
  );
}
