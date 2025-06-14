import { Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "../../Navbar.styles";

export function DesktopNavbar() {
  return (
    <Stack
    component="nav"
      direction="row"
      spacing={3}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Button sx={styles.button} component={RouterLink} to="/">
        Inicio
      </Button>
      <Button
        sx={styles.button}
        component={RouterLink}
        to="/booking"
      >
        Reservar
      </Button>
    </Stack>
  );
}
