import "./Contato.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contato() {

const form = useRef();

const [enviando, setEnviando] = useState(false);

const [mensagemStatus, setMensagemStatus] = useState({
    tipo: "",
    texto: ""
});

const enviarEmail = (e) => {

    e.preventDefault();

    setEnviando(true);

    emailjs.sendForm(

        "service_fb4vz57",
        "template_hnbsptd",
        form.current,
        "lTa25q9U41pUTw60I"

    )

    .then(() => {

    setMensagemStatus({
        tipo: "sucesso",
        texto: "✅ Mensagem enviada com sucesso! Entraremos em contato em breve."
    });

    form.current.reset();

    setEnviando(false);

    setTimeout(() => {
        setMensagemStatus({
            tipo: "",
            texto: ""
        });
    }, 5000);

})

    .catch(() => {

    setMensagemStatus({
        tipo: "erro",
        texto: "❌ Não foi possível enviar a mensagem. Tente novamente."
    });

    setEnviando(false);

    setTimeout(() => {
        setMensagemStatus({
            tipo: "",
            texto: ""
        });
    }, 5000);

});

};

    return (

        <section className="contato" id="contato">

            <div className="titulo">

                <span>FALE CONOSCO</span>

                <h2>Entre em Contato</h2>

            </div>

            <div className="contato-container">

    <div className="contato-topo">

        <motion.div
            className="informacoes"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
        >

            <div className="info-item">
                <FaWhatsapp />
                <div>
                    <h4>WhatsApp</h4>
                    <p>(98) 98121-5326</p>
                </div>
            </div>

            <div className="info-item">
                <FaEnvelope />
                <div>
                    <h4>E-mail</h4>
                    <p>zettaloc.empreendimentos@gmail.com</p>
                </div>
            </div>

            <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                    <h4>Endereço</h4>
                    <p>ROD BR 316 KM 54, 02 - Maracaçumé - Maranhão</p>
                </div>
            </div>

        </motion.div>

        <motion.div
            className="mapa"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
        >

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2875781894168!2d-45.968305089602524!3d-2.040835397932231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92b23f6ace0ec8a7%3A0xf3f16c130c37eb3e!2sZetta%20Loca%C3%A7%C3%B5es%20%26%20Empreedimentos!5e0!3m2!1spt-BR!2sbr!4v1784310419531!5m2!1spt-BR!2sbr" 
                loading="lazy"
                allowFullScreen
                title="Mapa"
            />

        </motion.div>

    </div>

    <motion.form
    ref={form}
    onSubmit={enviarEmail}
    className="formulario"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
    >

      <div className="campo">

    <label htmlFor="nome">
        Nome <span>*</span>
    </label>

    <input
        id="nome"
        type="text"
        name="nome"
        required
    />

</div>

<div className="campo">

    <label htmlFor="email">
        E-mail <span>*</span>
    </label>

    <input
        id="email"
        type="email"
        name="email"
        required
    />

</div>

<div className="campo">

    <label htmlFor="telefone">
        Telefone
    </label>

    <input
        id="telefone"
        type="text"
        name="telefone"
    />

</div>

<div className="campo">

    <label htmlFor="mensagem">
        Mensagem <span>*</span>
    </label>

    <textarea
        id="mensagem"
        name="mensagem"
        rows="6"
        required
    ></textarea>

</div>

{mensagemStatus.texto && (

    <div
        className={`mensagem-status ${mensagemStatus.tipo}`}
    >

        {mensagemStatus.texto}

    </div>

)}

        <button
    type="submit"
    disabled={enviando}
>

    {enviando ? "Enviando..." : "Enviar Mensagem"}

</button>

    </motion.form>

</div>

        </section>

    );

}

export default Contato;