import React from 'react';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';
import imagenPortada from '../../imgs/bebidasPortada.jpg';
import imagenOrangeEnergizer from '../../imgs/bebidas/orangeEnergizer.jpg';
import imagenMojitoMango from '../../imgs/bebidas/mojitoMango.jpg';
import imagenMojitoFresa from '../../imgs/bebidas/mojitoFresa.jpg';
import imagenLinternaVerde from '../../imgs/bebidas/linternaVerde.jpg';
import imagenSmoothieGansito from '../../imgs/bebidas/smoothieGansito.jpg';
import imagenSmoothieFresa from '../../imgs/bebidas/smoothieFresa.jpg';
import imagenSmoothieChicle from '../../imgs/bebidas/smoothieChicle.jpg';
import imagenSmoothieTaro from '../../imgs/bebidas/smoothieTaro.jpg';
import { ContenedorGeneralBebidas, ImagenBebidaStyle, ContenedorBebidaStyle, ContenedorNegro, ContenedorInformacion } from './Bebidas.styling';

const listaBebidas = [
    { title: 'Orange Energizer', img: imagenOrangeEnergizer },
    { title: 'Mojito de mango', img: imagenMojitoMango },
    { title: 'Mojito de fresa', img: imagenMojitoFresa },
    { title: 'Linterna verde', img: imagenLinternaVerde },
    { title: 'Smoothie de gansito', img: imagenSmoothieGansito },
    { title: 'Smoothie de fresa', img: imagenSmoothieFresa },
    { title: 'Smoothie de chicle', img: imagenSmoothieChicle },
    { title: 'Smoothie de taro', img: imagenSmoothieTaro },
];

const ContenedorBebida = ({ title, img }) => {
    return (
        <>
            <ContenedorBebidaStyle>
                <ImagenBebidaStyle title={title} img={img} />
                <p style={{ marginTop: '10px' }}>{title}</p>
            </ContenedorBebidaStyle>
        </>
    )
}

const Bebidas = () => {
    return (
        <>
            <ImagenPortadaPaginas img={imagenPortada} title='Las Bebidas' textColor='black' />
            <ContenedorGeneralBebidas>
                <ContenedorNegro />
                <ContenedorInformacion>
                    <h1 className="title">Disfrútalas bien frías por sólo $45</h1>
                    <div style={{ display: 'contents', height: '100%' }}>
                        {
                            listaBebidas.map(e => {
                                return (
                                    <ContenedorBebida title={e.title} img={e.img} />
                                )
                            })
                        }
                    </div>
                </ContenedorInformacion>
            </ContenedorGeneralBebidas>
            <div style={{ height: '10vh' }}></div>
        </>
    )
}

export default Bebidas;