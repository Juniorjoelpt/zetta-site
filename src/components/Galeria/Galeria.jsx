import "./Galeria.css";

import obra1 from "../../assets/images/gallery/obra1.jpg";
import obra2 from "../../assets/images/gallery/obra2.jpg";
import obra3 from "../../assets/images/gallery/obra3.jpg";
import obra4 from "../../assets/images/gallery/obra4.jpg";
import obra5 from "../../assets/images/gallery/obra5.jpg";
import obra6 from "../../assets/images/gallery/obra6.jpg";

const imagens = [
    obra1,
    obra2,
    obra3,
    obra4,
    obra5,
    obra6
];

function Galeria() {
    return (
        <section className="galeria" id="galeria">

            <div className="titulo">

                <span>GALERIA</span>

                <h2>Nossos Trabalhos</h2>

            </div>

            <div className="galeria-grid">

                {imagens.map((img, index) => (

                    <div className="foto" key={index}>

                        <img src={img} alt="" />

                        <div className="foto-overlay">

                            

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Galeria;