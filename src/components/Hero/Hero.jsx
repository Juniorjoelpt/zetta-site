import "./Hero.css";
import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero.jpg";

function Hero() {

    return (

        <section
            className="hero"
            id="home"
            style={{
                backgroundImage: `url(${heroImage})`
            }}
        >

            <div className="overlay">

                <motion.div
                    className="hero-content"

                    initial={{ opacity: 0, y: 50 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1 }}
                >
		<span className="hero-tag">

    			SOLUÇÕES EMPRESARIAIS

		</span>
                   <h1>

			Locação, Engenharia e
			<span> Soluções Integradas </span>

			para sua empresa

			</h1>

                    <p>

                        Locação de máquinas, transporte,
                        engenharia e manutenção com
                        qualidade, segurança e compromisso.

                    </p>

                    <div className="hero-buttons">

                        <a href="#contato" className="btn-primary">

                            Solicitar Orçamento

                        </a>

                        <a href="#servicos" className="btn-secondary">

                            Conheça nossos serviços

                        </a>

                    </div>
		<div className="hero-scroll">

    			↓ Role para conhecer nossa empresa

		</div>

                </motion.div>

            </div>

        </section>

    );

}

export default Hero;