import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState("home");



    useEffect(() => {

        const handleScroll = () => {
            setScroll(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);useEffect(() => {

    const secoes = document.querySelectorAll("section[id]");

    const handleActive = () => {

        let atual = "home";

        secoes.forEach(secao => {

            const topo = secao.offsetTop - 120;
            const altura = secao.offsetHeight;

            if (
                window.scrollY >= topo &&
                window.scrollY < topo + altura
            ) {
                atual = secao.id;
            }

        });

        setSecaoAtiva(atual);

    };

    window.addEventListener("scroll", handleActive);

    handleActive();

    return () => window.removeEventListener("scroll", handleActive);

}, []);

    return (

        <header className={scroll ? "navbar scrolled" : "navbar"}>
            <div className="container">

                <div className="logo">

   			 <img
        			src={logo}
        			alt="Zetta Locações e Empreendimentos"
        			className="logo-img"
    			 />

		</div>

                <nav className={menuAberto ? "menu active" : "menu"}>

                    <a href="#home" className={secaoAtiva === "home" ? "active" : ""}> Início </a>

                    <a href="#empresa" className={secaoAtiva === "empresa" ? "active" : ""} > Empresa </a>

                    <a href="#servicos" className={secaoAtiva === "servicos" ? "active" : ""} > Serviços </a>

                    <a href="#galeria" className={secaoAtiva === "galeria" ? "active" : ""} > Galeria </a>

                    <a href="#contato" className={secaoAtiva === "contato" ? "active" : ""} > Contato </a>

                </nav>

                <a
                    href="https://wa.me/5598981215326"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                >
                    <FaWhatsapp />
                    WhatsApp
                </a>

                <div
                    className="menu-mobile"
                    onClick={() => setMenuAberto(!menuAberto)}
                >

                    {
                        menuAberto
                            ? <FaTimes />
                            : <FaBars />
                    }

                </div>

            </div>

        </header>

    );

}

export default Navbar;