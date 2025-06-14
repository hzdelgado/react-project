import { Box, Typography } from "@mui/material";
import { styles } from "../../Booking.styles";

type HeaderProps = {
  title: string;
};

export function Header({ title }: Readonly<HeaderProps>) {
  return (
    <Box sx={styles.header}>
      <Typography variant="h2" gutterBottom sx={styles.title}>
        {title}
      </Typography>
    </Box>
  );
}
