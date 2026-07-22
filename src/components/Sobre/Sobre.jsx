import "./Sobre.css";
import { motion } from "framer-motion";

function Sobre() {
    return (
        <section className="sobre" id="empresa">

            <div className="container">

                <motion.div
                    className="sobre-imagem"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900"
                        alt="Empresa"
                    />
                </motion.div>

                <motion.div
                    className="sobre-texto"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <span>Nossa Empresa</span>

                    <h2>
                        Soluções completas para empresas e órgãos públicos
                    </h2>

                    <p>
                        Atuamos com excelência na prestação de serviços,
                        oferecendo soluções em locação de máquinas,
                        transporte executivo, transporte escolar,
                        manutenção de ar-condicionado e serviços de engenharia.
                    </p>

                    <p>
                        Nossa missão é entregar qualidade, segurança,
                        eficiência e compromisso em cada projeto,
                        sempre buscando superar as expectativas dos nossos clientes.
                    </p>

                </motion.div>

            </div>

        </section>
    );
}

export default Sobre;