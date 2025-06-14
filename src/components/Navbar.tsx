import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Little Lemon
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
        <Button color="inherit" component={RouterLink} to="/booking">Reservar</Button>
      </Toolbar>
    </AppBar>
  );
}