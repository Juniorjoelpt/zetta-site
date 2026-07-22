import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {

    const whatsapp =
        "https://wa.me/5598981215326?text=Olá! Gostaria de solicitar um orçamento.";

    return (

        <a
            href={whatsapp}
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
        >

            <FaWhatsapp />

        </a>

    );

}

export default WhatsappButton;