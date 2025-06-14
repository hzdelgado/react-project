import { Box, MenuItem, Menu, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export function MenuMobile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="nav" sx={{ display: { xs: "flex", md: "none", paddingX: 2 } }}>
      <IconButton onClick={handleOpenMenu} size="large">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem component={RouterLink} to="/" onClick={handleCloseMenu}>
          Inicio
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/booking"
          onClick={handleCloseMenu}
        >
          Reservar
        </MenuItem>
      </Menu>
    </Box>
  );
}
