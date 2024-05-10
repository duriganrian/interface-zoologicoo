import React, { useEffect, useState } from 'react';
import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';
import './Animais.css'; // Importe o arquivo CSS aqui
import AnimalRequests from '../../fetch/AnimalRequests';

function Animais() {
    const [animais, setAnimais] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
              
            const fetchData = async () => {
                setAnimais(await AnimalRequests.ListarAnimais());
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navegacao />

            <div className='ctn-animais'>
                {animais ? (
                    // Renderize o componente CardAnimal para cada item da lista
                    animais.map(animal => (
                        <CardAnimal key={animal.idanimal} animal={animal} />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </>
    );
}

export default Animais;
