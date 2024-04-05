import imgNotFound from '../../assets/img-not-found.png' // importando recurso para o componente
import './Atracao.css'

function Atracao() {
    return (
        <div className="ctn-atracao">
            <img src={imgNotFound} />
            <p>LOREM IPSUM</p>
        </div>
    );
}


export default Atracao