import React, { useContext } from 'react';
import imagenPortadaHamburguesa from '../../imgs/hamburguesas.jpeg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ImagenPortadaStyled } from './ImagenPortadaPaginas.styling';

const ImagenPortadaPaginas = ({img, title, centered = true, textColor = 'white', yOffSiteIPad='50%', height='30vh' }) => {

    return (
        <>
            <ImagenPortadaStyled img={img} centered={centered} yOffSiteIPad={yOffSiteIPad} textColor={textColor} height={height} >
                <h1 style={{textAlign: 'center', fontSize: '40pt' }}>{title}</h1>
            </ImagenPortadaStyled>
        </>
    );
};

export default ImagenPortadaPaginas;