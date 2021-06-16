import React, { useContext } from 'react';
import imagenPortadaHamburguesa from '../../imgs/hamburguesas.jpeg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ImagenPortadaStyled } from './ImagenPortadaPaginas.styling';

const ImagenPortadaPaginas = ({img, title, centered = true, textColor = 'white'}) => {

    return (
        <>
            <ImagenPortadaStyled img={img} centered={centered}>
                <h1 style={{textAlign: 'center', fontSize: '40pt', color: {textColor}}}>{title}</h1>
            </ImagenPortadaStyled>
        </>
    );
};

export default ImagenPortadaPaginas;