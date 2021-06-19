import React, { useContext } from 'react';
import imagenPortadaHamburguesa from '../../imgs/hamburguesas.jpeg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ImagenPortadaStyled } from './ImagenPortadaPaginas.styling';

const ImagenPortadaPaginas = ({ 
    img, title, 
    centered = true, 
    textColor = 'white', 
    yOffSiteIPad = '50%', 
    height = '30vh', 
    withMarginTop = true, 
    heightOniPad = '20vh', 
    heightOnIPhone = '25vh', 
    yOffSiteiPhone='10%' }) => {

    return (
        <>
            <ImagenPortadaStyled 
            img={img} 
            centered={centered} 
            yOffSiteIPad={yOffSiteIPad} 
            textColor={textColor} 
            height={height} 
            withMarginTop={withMarginTop} 
            heightOniPad={heightOniPad} 
            heightOnIPhone={heightOnIPhone}
            yOffSiteiPhone={yOffSiteiPhone}
            
            >
                <h1 style={{ textAlign: 'center' }}>{title}</h1>
            </ImagenPortadaStyled>
        </>
    );
};

export default ImagenPortadaPaginas;