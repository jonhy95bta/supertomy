import { Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const Nosotros = () => {
    return (

        <section className="px-6 py-12 max-w-3xl mx-auto text-center">

            <Helmet>
                <title>Sobre nosotros | Almacén de Barrio</title>
                <meta name="description" content="Conocé la historia de Cris y Juli, los dueños del Almacén. Emprendedores desde siempre, con más de 10 años de experiencia en Gral. Belgrano." />
                <meta name="keywords" content="historia de Cris y Juli, emprendedores, Almacén de Barrio, General Belgrano, trabajo local" />
            </Helmet>

            <h1 className="text-4xl font-bold text-blue-600 mb-6">Sobre Nosotros</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                Somos <strong>Cris y Juli</strong>, una pareja de General Belgrano con alma emprendedora. Hace más de 10 años que apostamos por nuestro querido pueblo, y desde entonces no hemos parado de trabajar por este sueño: un almacén que sea más que un lugar donde comprar.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Siempre nos gustó la idea de tener un comercio propio, atendido por nosotros, con la mejor onda y cercanía. Desde el primer día, pusimos todo el corazón en cada detalle: en los productos, en la atención, en el ambiente. Para muchos ya no somos "el almacén de la esquina", sino parte de la rutina del barrio. Y eso, para nosotros, vale oro.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                El nombre del almacén no es casualidad, es un homenaje a uno de nuestros mayores orgullos: nuestro hijo. Él nos inspira todos los días a seguir adelante y a dejarle un ejemplo de esfuerzo, compromiso y cariño por lo que uno hace.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                ¡Gracias por acompañarnos! Este espacio es de ustedes tanto como nuestro.
            </p>

            <div className="max-w-2xl mx-auto text-center mt-10">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Horarios de Atención</h2>
                <div className="flex flex-col gap-4 text-lg text-gray-700 items-center">
                    <div className="flex items-center gap-3">
                        <Clock className="text-blue-600 w-5 h-5" />
                        <span><strong>Lunes a Viernes:</strong> 8:00 a 13:00 y 17:00 a 21:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="text-blue-600 w-5 h-5" />
                        <span><strong>Sábados:</strong> 8:00 a 13:00 y 17:30 a 21:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="text-blue-600 w-5 h-5" />
                        <span><strong>Domingos:</strong> 9:00 a 13:00</span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Nosotros;
