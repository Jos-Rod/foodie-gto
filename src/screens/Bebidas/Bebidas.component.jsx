import React from 'react';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';
import imagenPortada from '../../imgs/bebidasPortada.jpg';
import {ContenedorGeneralBebidas, ContenedorNegro, ContenedorInformacion} from './Bebidas.styling';

const Bebidas = () => {
    return (
        <>
            <ImagenPortadaPaginas img={imagenPortada} title='Las Bebidas' textColor='black' />
            <ContenedorGeneralBebidas>
                <ContenedorNegro />
                <ContenedorInformacion>
                    <h1 className="title">Disfrútalas bien frías por sólo $45</h1>
                </ContenedorInformacion>
            </ContenedorGeneralBebidas>
            <div style={{height: '10vh'}}></div>
        </>
    )
}

export default Bebidas;