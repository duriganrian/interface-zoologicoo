import React, { useEffect, useState } from 'react';
import Navegacao from '../../components/Navegacao/Navegacao';
import ListaAnimais from '../../components/ListaAnimais/ListaAnimais';
import './Depoimentos.css';

function Depoimentos() {
    return (
        <>
            <Navegacao />
            <ListaAnimais />
        </>
    );
}

export default Depoimentos;