import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';

function App() {
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
       
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
