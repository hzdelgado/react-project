import { Box, Typography } from "@mui/material";
import { styles } from "../../Booking.styles";

export function Header() {
  return (
    <Box
      sx={styles.header}
    >
      <Typography variant="h2" gutterBottom sx={styles.title}>
        Reservar una mesa
      </Typography>
    </Box>
  );
}
