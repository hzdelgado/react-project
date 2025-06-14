import { AppBar, Box, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/nav-logo.png";
import { DesktopNavbar } from "./components/DesktopNavbar";
import { MenuMobile } from "./components/MenuMobile";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <RouterLink to="/">
          <Box
            component="img"
            src={Logo}
            alt="Little Lemon Logo"
            sx={{ height: 40, cursor: "pointer" }}
          />
        </RouterLink>

        {/* Botones Desktop */}
        <DesktopNavbar />
        {/* Menú Mobile */}
        <MenuMobile />
      </Toolbar>
    </AppBar>
  );
}
