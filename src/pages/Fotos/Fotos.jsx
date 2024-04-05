import './Fotos.css';
import Carousel from '../../components/ImgCarousel/ImgCarousel';
import Navegacao from '../../components/Navegacao/Navegacao';


function Fotos() {
    return(
        <>
            <Navegacao />
            <h1>Fotos</h1>
            <Carousel />
        </>
    );
}

export default Fotos