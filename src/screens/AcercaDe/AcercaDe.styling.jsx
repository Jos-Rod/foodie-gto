import styled from "styled-components";

export const ContenedorPrimeraDescripcion = styled.div`
    width: 100%;
    /* background-color: beige; */
    height: 80vh;
    min-height: 525px;
    display: flex;

    @media screen and (max-width: 768px) {
        height: 40vh;
        min-height: 410px;
    }
`;

export const ContenedorDescripcionFoodie = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 55%;
    }
`;

export const ContenedorDescripcionImagen = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        width: 45%;
    }
`;

export const LogoFoodie = styled.div`
    background-image: url(${props => props.img});
    width: 50%;
    height: 50%;
    background-size: contain;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const ContenedorDescripcionP = styled.div`
    width: 80%;
    
    @media screen and (max-width: 768px) {
        font-size: 8pt;
        width: 90%;
    }
`;

export const ContenedorCaracteristicas = styled.div`
    width: 100%;
    height: 50vh;
    /* background-color: beige; */
    display: flex;

    @media screen and (max-width: 768px) {
        display: inline-block;
        height: 80vh;
        align-content: center;
    }
`;

export const CaracteristicaStyle = styled.div`
    width: 25%;
    height: 100%;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 50%;
        height: 50%;
        display: inline-flex;
    }
`;

export const CaracteristicaImagen = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 50%;
    height: 30%;

    @media screen and (max-width: 768px) {
        height: 80px;
        margin-top: 20px;
    }
`;

export const DivBlanco = styled.div`
    width: 33%;
    height: 1px;
`;

export const ContenedorTituloPuebloMagico = styled.div`
    width: 66%;
`;

export const ContenedorDescripcionPuebloMagico = styled.div`
    display: flex;
    height: 45vh;
    width: 100%;
    background-color: beige;

    @media screen and (max-width: 768px) {
        height: 30vh;
    }
`;

export const ImagenPuebloMagico = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 33%;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 40%;
    }
`;

export const ContenedorNegroDescripcion = styled.div`
    background-color: black;
    width: 67%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 14pt;

    @media screen and (max-width: 768px) {
        font-size: 8pt;
        width: 60%;
    }
`;