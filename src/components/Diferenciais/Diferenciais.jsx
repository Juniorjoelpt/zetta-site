import "./Diferenciais.css";

import {
    FaShieldAlt,
    FaUsers,
    FaClock,
    FaAward,
    FaTools,
    FaHandshake
} from "react-icons/fa";

import { motion } from "framer-motion";

function Diferenciais() {

    const itens = [

        {
            icon: <FaUsers />,
            titulo: "Equipe Especializada",
            texto: "Profissionais qualificados para atender diversos segmentos."
        },

        {
            icon: <FaClock />,
            titulo: "Atendimento Ágil",
            texto: "Rapidez na execução e suporte ao cliente."
        },

        {
            icon: <FaShieldAlt />,
            titulo: "Segurança",
            texto: "Compromisso com normas e boas práticas."
        },

        {
            icon: <FaAward />,
            titulo: "Qualidade",
            texto: "Serviços executados com alto padrão."
        },

        {
            icon: <FaTools />,
            titulo: "Soluções Integradas",
            texto: "Diversos serviços reunidos em um único parceiro."
        },

        {
            icon: <FaHandshake />,
            titulo: "Compromisso",
            texto: "Relacionamento transparente e foco no cliente."
        }

    ];

    return (

<section className="diferenciais">

    <div className="diferenciais-container">

        <div className="diferenciais-titulo">
		
            <span>NOSSOS DIFERENCIAIS</span>

            <h2>Por que escolher nossa empresa?</h2>

        </div>

        <div className="diferenciais-grid">

            {itens.map((item,index)=>(

                <motion.div
                    key={index}
                    className="diferencial-card card-premium"
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{delay:index*0.1}}
                    viewport={{once:true}}
                >

                    <div className="icone">

                        {item.icon}

                    </div>

                    <h3>{item.titulo}</h3>

                    <p>{item.texto}</p>

                </motion.div>

            ))}

        </div>

    </div>

</section>

);
}

export default Diferenciais;