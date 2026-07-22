import Hero from "../components/Hero/Hero";
import Sobre from "../components/Sobre/Sobre";
import Servicos from "../components/Servicos/Servicos";
import Diferenciais from "../components/Diferenciais/Diferenciais";
import Galeria from "../components/Galeria/Galeria";
import Estatisticas from "../components/Estatisticas/Estatisticas";
import CTA from "../components/CTA/CTA";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <>
            <Hero />
            <Sobre />
            <Servicos />
            <Diferenciais />
            <Galeria />
            <Estatisticas />
            <CTA />
            <Contato />
            <Footer />
        </>
    );
}

export default Home;