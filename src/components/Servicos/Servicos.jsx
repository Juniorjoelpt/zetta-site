import "./Servicos.css";

import { motion } from "framer-motion";

import onibus from "../../assets/images/services/onibus.jpg";
import executivo from "../../assets/images/services/executivo.jpg";
import ar from "../../assets/images/services/ar.jpg";
import maquinas from "../../assets/images/services/maquinas.jpg";
import engenharia from "../../assets/images/services/engenharia.jpg";

const servicos = [

{
    titulo:"Locação de Ônibus Escolar",
    imagem:onibus
},

{
    titulo:"Veículos Executivos",
    imagem:executivo
},

{
    titulo:"Manutenção de Ar-Condicionado",
    imagem:ar
},

{
    titulo:"Locação de Máquinas Pesadas",
    imagem:maquinas
},

{
    titulo:"Serviços de Engenharia",
    imagem:engenharia
}

];

function Servicos(){

    return(

<section className="servicos" id="servicos">

<div className="titulo">

<span>O QUE FAZEMOS</span>

<h2>Nossos Serviços</h2>

</div>

<div className="services-grid">

{

servicos.map((item,index)=>(

<motion.div

className="service-card"

key={index}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*0.2}}

viewport={{once:true}}

>

<img src={item.imagem} alt={item.titulo}/>

<div className="overlay">

<h3>{item.titulo}</h3>

<button>Saiba Mais</button>

</div>

</motion.div>

))

}

</div>

</section>

    )

}

export default Servicos;