import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: '#495E57',     // Verde oscuro
    },
    secondary: {
      main: '#F4CE14',     // Amarillo limón
    },
    background: {
      default: '#EDEFEE',  // Beige suave
      paper: '#FFFFFF',    // Tarjetas claras
    },
    text: {
      primary: '#333333',  // Texto oscuro
      secondary: '#495E57',
    },
  },
  typography: {
    fontFamily: `'Karla', sans-serif`,
    h1: { fontFamily: `'Markazi Text', serif` },
    h2: { fontFamily: `'Markazi Text', serif` },
    h3: { fontFamily: `'Markazi Text', serif` },
  },
});

export default theme;
