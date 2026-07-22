import "./Servicos.css";

function ServiceCard({ icon, titulo, descricao }) {

    return (

        <div className="service-card">

            <div className="service-icon">

                {icon}

            </div>

            <h3>{titulo}</h3>

            <p>{descricao}</p>

            <button>Saiba mais</button>

        </div>

    );

}

export default ServiceCard;