import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/ConfirmedBooking';
import NotFound from './pages/NotFound';

function App() {
 
  return (
    <>
      <Navbar />
      <main>
       
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
