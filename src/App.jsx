import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Productos from './pages/Productos.jsx';
import Promociones from './pages/Promociones.jsx';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/promociones" element={<Promociones />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
