import styled from 'styled-components';

export const ImagenPortadaStyled = styled.div`
    background-image: url(${props => props.img});
    height: 40vh;
    background-position: center;
    margin-top: 23px;
    background-size: 100%;
    background-repeat: no-repeat;
`;

export const DetalleAlmuerzos = styled.div`
    background-color: ${props => props.color};
    height: 70vh;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 25vh;
`;

export const DescripcionDesayuno = styled.div`
    width: 50%;
    text-align: center;
`;

export const TituloDesayuno = styled.h1`
    text-align: center;
`;

export const ContenedorImagen = styled.div`
    width: 50%;
    height: 95%;
`;

export const ImagenDesayuno = styled.div`
    background-image: url(${props => props.img});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    margin-top: -30px;
`;