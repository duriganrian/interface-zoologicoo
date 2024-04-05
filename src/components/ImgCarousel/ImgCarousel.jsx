import './ImgCarousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import jsonData from '../../assets/json/imagens.json';

function ImgCarrossel() {
    const [ImgCarousel, setImgCarousel] = useState([]);

    useEffect(() => {
        setImgCarousel(jsonData);
    });

    return (
        <div className='ctn-carrossel'>
            <Carousel>
                {ImgCarousel.map(Animal => (
                    <Carousel.Item key={Animal.index} interval={1500}>
                        <img
                            className="d-block w-100"
                            src={Animal.src}
                            alt={Animal.index}                         
                        />
                        <Carousel.Caption>
                            <h3>{Animal.caption}</h3>
                            <p>{Animal.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))};

            </Carousel>
        </div>
    );
}

export default ImgCarrossel;