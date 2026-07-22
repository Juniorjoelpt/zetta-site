import "./Footer.css";
import logo from "../../assets/images/logo.png";

import {
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn
} from "react-icons/fa";

function Footer() {

    const ano = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-col">

                    <div className="logo">
    			 <img
        			src={logo}
        			alt="Zetta Locações e Empreendimentos"
        			className="logo-img"
    			  />
		     </div>

                    <p>

                        Soluções em locação de máquinas,
                        transporte executivo, transporte escolar,
                        climatização e serviços de engenharia.

                    </p>

                </div>

                <div className="footer-col">

                    <h3>Links Rápidos</h3>

                    <ul>

                        <li><a href="#inicio">Início</a></li>

                        <li><a href="#empresa">Empresa</a></li>

                        <li><a href="#servicos">Serviços</a></li>

                        <li><a href="#galeria">Galeria</a></li>

                        <li><a href="#contato">Contato</a></li>

                    </ul>

                </div>

                <div className="footer-col">

                    <h3>Contato</h3>
			
                    <div className="footer-item">
    			<FaWhatsapp />
    			<span>(98) 98121-5326</span>
			</div>

		<div className="footer-item">
    		<FaEnvelope />
    		<span>zettaloc.empreendimentos@gmail.com</span>
		</div>

			<div className="footer-item">
  			  <FaMapMarkerAlt />
   		 <span>ROD BR 316 KM 54, 02 - Maracaçumé - MA</span>
		</div>

                </div>

                <div className="footer-col">

                    <h3>Redes Sociais</h3>

                    <div className="social">

                        <a
  			  href="https://www.instagram.com/zettalocacoes?igsh=YWZzZWNnb3BqaHdm"
   		          target="_blank"
    			  rel="noopener noreferrer"
    			  aria-label="Instagram da Zetta Locações"
				>
   			 <FaInstagram />
			</a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                © {ano} Empresa. Todos os direitos reservados.

            </div>

        </footer>

    );

}

export default Footer;