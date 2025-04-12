
import { Percent, Tag, BadgeDollarSign, Gift, MessageCircle } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const promociones = [
    {
        nombre: "2x1 en Galletitas",
        descripcion: "Llevá 2 paquetes por el precio de 1 toda la semana.",
        icono: <Percent className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
        nombre: "Descuento en Lácteos",
        descripcion: "15% off en quesos y yogures seleccionados.",
        icono: <Tag className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
        nombre: "Promo Carnicería",
        descripcion: "Pollo fresco x kg a precio especial todos los viernes.",
        icono: <BadgeDollarSign className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
    {
        nombre: "¡Sorpresa con tu compra!",
        descripcion: "Regalo sorpresa en compras mayores a $5000.",
        icono: <Gift className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    },
];

const Promociones = () => {
    return (
        <section className="px-6 py-12 max-w-5xl mx-auto">

            <Helmet>
                <title>Promociones Especiales | Almacén de Barrio</title>
                <meta name="description" content="No te pierdas nuestras ofertas semanales. ¡Descuentos exclusivos en productos seleccionados!" />
                <meta name="keywords" content="promociones, ofertas, descuentos, productos en oferta, Almacén de Barrio" />
            </Helmet>

            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Promociones Especiales</h2>
            <p className="text-gray-700 mb-8">
                ¡No te pierdas nuestras ofertas semanales! Ahorros en productos seleccionados cada semana.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                {promociones.map((promo) => (
                    <div
                        key={promo.nombre}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center hover:scale-105 transform-gpu will-change-transform"
                    >
                        {promo.icono}
                        <h3 className="text-xl font-semibold text-blue-500 mb-1">{promo.nombre}</h3>
                        <p className="text-gray-600 text-sm">{promo.descripcion}</p>
                    </div>
                ))}
            </div>

            {/* 💳 Sección de Medios de Pago */}
            <section className="px-6 py-12 bg-white">
                <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">Medios de Pago</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <img
                        src="/img/visa.webp"
                        alt="Visa"
                        className="h-16 object-contain transition-transform duration-200 hover:scale-105 shadow-md rounded-lg"
                    />
                    <img
                        src="/img/master.webp"
                        alt="MasterCard"
                        className="h-16 object-contain transition-transform duration-200 hover:scale-105 shadow-md rounded-lg"
                    />
                    <img
                        src="/img/mp.webp"
                        alt="MercadoPago"
                        className="h-16 object-contain transition-transform duration-200 hover:scale-105 shadow-md rounded-lg"
                    />
                    <img
                        src="/img/efectivo.webp"
                        alt="Efectivo"
                        className="h-16 object-contain transition-transform duration-200 hover:scale-105 shadow-md rounded-lg"
                    />
                    <img
                        src="/img/cdni.webp"
                        alt="Débito"
                        className="h-16 object-contain transition-transform duration-200 hover:scale-105 shadow-md rounded-lg"
                    />
                </div>
            </section>

            {/* 👉 Botón de WhatsApp */}
            <div className="text-center">
                <a
                    href="https://wa.me/5492243405701?text=Hola%2C%20quiero%20consultar%20por%20las%20promociones%20del%20almacén"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition transform hover:scale-105 animate-pulse"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-white">Consultar por WhatsApp</span>
                </a>
            </div>



        </section>
    );
};

export default Promociones;
