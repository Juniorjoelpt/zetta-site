import "./Estatisticas.css";


import { useInView } from "react-intersection-observer";

import {
  FaUsers,
  FaBuilding,
  FaHardHat,
  FaHeadset
} from "react-icons/fa";

function Estatisticas(){

const {ref,inView}=useInView({

triggerOnce:true,

threshold:.3

});

const dados=[

{

icone:<FaBuilding/>,

numero:10,

texto:"Anos de Experiência",

sufixo:"+"

},

{

icone:<FaUsers/>,

numero:50,

texto:"Cidades Atendidas",

sufixo:"+"

},

{

icone:<FaHardHat/>,

numero:500,

texto:"Veiculos na Frota",

sufixo:"+"

},

{

icone:<FaHeadset/>,

numero:24,

texto:"Atendimento",

sufixo:"h"

}

];

return(

<section className="estatisticas" ref={ref}>

<div className="container">

{

dados.map((item,index)=>(

<div className="numero-card" key={index}>

<div className="icone">

{item.icone}

</div>

<h2>
    {item.numero}
    {item.sufixo}
</h2>

<p>{item.texto}</p>

</div>

))

}

</div>

</section>

)

}

export default Estatisticas;