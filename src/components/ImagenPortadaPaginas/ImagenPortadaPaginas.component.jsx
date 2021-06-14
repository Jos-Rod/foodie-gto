import React, { useContext } from 'react';
import imagenPortada from '../../imgs/bread.jpg';
import imagenDesayunos from '../../imgs/desayunoCuadrado.jpg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ImagenPortadaStyled, DetalleAlmuerzos, DescripcionDesayuno, ContenedorImagen, TituloDesayuno, ImagenDesayuno } from './ImagenPortadaPaginas.styling';

const ImagenPortadaPaginas = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <ImagenPortadaStyled img={imagenPortada}>

            </ImagenPortadaStyled>
            <div style={{textAlign:'center'}}>
                <h1 className="title">¿Ya tienes que desayunar?</h1>
            </div>
            <DetalleAlmuerzos color={cremaColor}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <DescripcionDesayuno>
                        <TituloDesayuno>Desayunos y almuerzos</TituloDesayuno>
                        <p className="fontFSpecialElite">DISPONIBLE DESDE LAS 9 AM</p>
                    </DescripcionDesayuno>
                    <ContenedorImagen>
                        <ImagenDesayuno img={imagenDesayunos}/>
                    </ContenedorImagen>
                    
                </div>
            </DetalleAlmuerzos>
            <div style={{ height: '300px' }}>a</div>
        </>
    );
};

export default ImagenPortadaPaginas;