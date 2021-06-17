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
import imagenCafe from '../../imgs/bebidas/cafe.jpg';
import { ContenedorGeneralBebidas, ContenedorOtrasBebidas, ContenedorOtrasBebidasImagen, ContenedorOtrasBebidasEImagen, ImagenBebidaStyle, ContenedorBebidaStyle, ContenedorNegro, ContenedorInformacion } from './Bebidas.styling';
import  ContenedorListaConPrecio from '../../components/ContenedorListaConPrecio';

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

const listaBebidasLabelsPrecios = [
    {title: 'Té', precio: '$50'},
    {title: 'Café', precio: '$50'},
    {title: 'Refrescos', precio: '$50'},
    {title: 'Licuado del día', precio: '$50'},
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
            <ImagenPortadaPaginas img={imagenPortada} yOffSiteIPad='30%' title='Las Bebidas' textColor='black' />
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
            <ContenedorOtrasBebidasEImagen>
                <ContenedorOtrasBebidas>
                        <h1 className="centered" style={{margin: '0px', marginBottom: '20px'}}>Otras bebidas</h1>
                        <div style={{ display: 'block', width: '70%' }}>
                        <ContenedorListaConPrecio lista={listaBebidasLabelsPrecios} />
                        </div>
                </ContenedorOtrasBebidas>
                <ContenedorOtrasBebidasImagen img={imagenCafe} />
            </ContenedorOtrasBebidasEImagen>
            <div style={{ height: '1vh' }}></div>
        </>
    )
}

export default Bebidas;