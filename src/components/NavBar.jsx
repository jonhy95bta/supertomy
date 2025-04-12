import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Usamos íconos de Lucide, pero podés cambiar

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow px-6 py-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="text-xl font-bold text-blue-600">Mercadito Tomy</div>

                {/* Botón hamburguesa para mobile */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Links - versión desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
                    <Link to="/nosotros" className="text-gray-700 hover:text-blue-600">Nosotros</Link>
                    <Link to="/productos" className="text-gray-700 hover:text-blue-600">Productos</Link>
                    <Link to="/promociones" className="text-gray-700 hover:text-blue-600">Promociones</Link>
                </div>
            </div>

            {/* Links - versión mobile */}
            {open && (
                <div className="md:hidden flex flex-col items-start space-y-2 mt-4 px-2">
                    <Link to="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Inicio</Link>
                    <Link to="/nosotros" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Nosotros</Link>
                    <Link to="/productos" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Productos</Link>
                    <Link to="/promociones" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Promociones</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
