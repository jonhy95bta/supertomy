import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>

            <Helmet>
                <title>Almacén de Barrio | Inicio</title>
                <meta name="description" content="Conocé nuestro almacén en Gral. Belgrano. Productos frescos, promociones y la mejor atención de Cris y Juli. ¡Te esperamos con la mejor onda!" />
                <meta name="keywords" content="almacén, productos frescos, Gral. Belgrano, Cris y Juli, atención personalizada, promociones semanales" />
            </Helmet>
            
            {/* 📸 Header con imagen de portada */}
            <header
                className="w-full h-[400px] bg-cover bg-center relative"
                style={{ backgroundImage: "url('/img/header.webp')" }}
            >
            </header>

            {/* 👋 Sección de bienvenida */}
            <main className="px-6 py-16 text-center bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">Tu almacén de confianza</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
                    En nuestro almacén, no solo vas a encontrar productos frescos todos los días, sino también una sonrisa amiga.
                    Somos <span className="font-bold text-blue-500">Cris</span> y <span className="font-bold text-blue-500">Juli</span>, y estamos para darte una atención personalizada, con la mejor onda del barrio.
                </p>
                <p className="text-gray-600 text-base max-w-xl mx-auto">
                    Te esperamos con promos semanales, marcas que conocés y la calidez de siempre. ¡Pasá cuando quieras!
                </p>
            </main>

            {/* 🛍️ Sección de marcas */}
            <section className="bg-white py-10">
                <h3 className="text-2xl font-semibold text-center text-blue-600 mb-8">
                    Nuestras marcas y ubicación
                </h3>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 px-6">
                    {/* 🏷️ Marcas */}
                    <div className="flex flex-wrap justify-center gap-6 md:w-2/3">
                        <img src="../img/arcor.webp" alt="Marca 1" className="h-20" />
                        <img src="../img/lucchetti.webp" alt="Marca 2" className="h-20" />
                        <img src="../img/naruta.webp" alt="Marca 3" className="h-20" />
                        <img src="../img/quilmes.webp" alt="Marca 4" className="h-20" />
                        <img src="../img/marolio.webp" alt="Marca 5" className="h-20" />
                        <img src="../img/playadito.webp" alt="Marca 6 " className="h-20" />
                        <img src="../img/bagley.webp" alt="Marca 7" className="h-20" />
                        <img src="../img/baggio.webp" alt="Marca 8" className="h-20" />
                        <img src="../img/knor.webp" alt="Marca 9" className="h-20" />
                        <img src="../img/serenisima.webp" alt="Marca 10" className="h-20" />
                        <img src="../img/kinder.webp" alt="Marca 11" className="h-20" />
                    </div>

                    {/* 📍 Mapa reducido */}
                    <div className="w-[300px] flex flex-col items-center">
                        <div className="w-full h-[200px] rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1744415480425!6m8!1m7!1svFGfmTihz_aPZIsxywka1A!2m2!1d-35.76968816407162!2d-58.50757167639386!3f247.6966480680066!4f4.093781669353021!5f0.7820865974627469"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                        <p className="text-center mt-3 text-gray-700 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                            </svg>
                            Calle 32 n°1278, Gral Belgrano
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
