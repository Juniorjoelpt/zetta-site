import "./CTA.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function CTA() {

    const whatsapp =
        "https://wa.me/559898121-5326?text=Olá! Gostaria de solicitar um orçamento.";

    return (

        <section className="cta">

            <motion.div
                className="cta-container"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <span>ATENDIMENTO RÁPIDO</span>

                <h2>
                    Precisa de uma solução para sua empresa?
                </h2>

                <p>
                    Entre em contato conosco e solicite um orçamento sem compromisso.
                    Nossa equipe está pronta para atender você com rapidez,
                    qualidade e segurança.
                </p>

                <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-button"
                >
                    <FaWhatsapp />

                    Solicitar Orçamento

                </a>

            </motion.div>

        </section>

    );

}

export default CTA;