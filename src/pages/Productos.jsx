import { Sandwich, Wine, Carrot, Sparkles, Drumstick, Snowflake } from "lucide-react";

import { Helmet } from 'react-helmet-async';

const categorias = [
    {
        nombre: "Almacén",
        icono: <Sandwich className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Productos secos, enlatados y básicos para todos los días."
    },
    {
        nombre: "Bebidas",
        icono: <Wine className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Gaseosas, aguas, jugos y bebidas con alcohol."
    },
    {
        nombre: "Verdulería",
        icono: <Carrot className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Frutas y verduras frescas del día."
    },
    {
        nombre: "Perfumería",
        icono: <Sparkles className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Higiene personal, cuidado del cuerpo y limpieza."
    },
    {
        nombre: "Pollo y Cerdo",
        icono: <Drumstick className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Cortes frescos y listos para tu mesa."
    },
    {
        nombre: "Congelados",
        icono: <Snowflake className="h-10 w-10 text-blue-500 mb-2" />,
        descripcion: "Comidas listas, helados, vegetales y más."
    }
];
const Productos = () => {
    return (
        <section className="px-6 py-12 max-w-5xl mx-auto">

            <Helmet>
                <title>Productos | Almacén de Barrio</title>
                <meta name="description" content="Descubrí nuestra amplia variedad de productos frescos, alimentos, bebidas, limpieza, perfumería, verdulería y mucho más." />
                <meta name="keywords" content="productos frescos, alimentos, bebidas, perfumería, verdulería, mercado, Almacén de Barrio" />
            </Helmet>

            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Nuestros Productos</h2>
            <p className="text-gray-700 mb-8">
                Ofrecemos una amplia variedad de productos frescos, alimentos, bebidas, limpieza, perfumería, verdulería, pollo, cerdo, congelados y más.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {categorias.map((cat) => (
                    <div
                        key={cat.nombre}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center hover:scale-105 transform-gpu will-change-transform"
                    >

                        {cat.icono}
                        <h3 className="text-xl font-semibold text-blue-500 mb-1">{cat.nombre}</h3>
                        <p className="text-gray-600 text-sm">{cat.descripcion}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Productos;
