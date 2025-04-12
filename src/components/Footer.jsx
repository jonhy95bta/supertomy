const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 text-center text-gray-600 mt-10 text-sm">
            <p>© {new Date().getFullYear()} Almacén de Barrio. Todos los derechos reservados.</p>
            <p className="mt-1">
                Desarrollado con 💻 por{" "}
                <a
                    href="https://www.instagram.com/tu_usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Jonathan Aguirre Dev
                </a>{" "}
                /{" "}
                <a
                    href="https://www.tuportafolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                >
                    BTA Informática
                </a>
            </p>
        </footer>
    );
};

export default Footer;