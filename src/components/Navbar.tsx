import { AppBar, Toolbar, Button, Box, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../assets/nav-logo.png';
import { styles } from './Navbar.styles';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "white"}}>
      <Stack display="flex" flexDirection="row" justifyContent="space-between" paddingX={5}>
        <Box
            component="img"
            src={Logo}
            alt="Little Lemon Logo"
            sx={{ height: 40, mr: 1 }}
          /> 
        <Stack display="flex" flexDirection="row" columnGap={5}>
        <Button  sx={styles.button} component={RouterLink} to="/">Inicio</Button>
        <Button sx={styles.button}  component={RouterLink} to="/booking">Reservar</Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}