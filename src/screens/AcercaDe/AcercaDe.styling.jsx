import styled from "styled-components";

export const ContenedorPrimeraDescripcion = styled.div`
    width: 100%;
    /* background-color: beige; */
    height: 80vh;
    min-height: 525px;
    display: flex;
`;

export const ContenedorDescripcionFoodie = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContenedorDescripcionImagen = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const LogoFoodie = styled.div`
    background-image: url(${props => props.img});
    width: 50%;
    height: 50%;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ContenedorDescripcionP = styled.div`
    width: 80%;
`;

export const ContenedorCaracteristicas = styled.div`
    width: 100%;
    height: 50vh;
    /* background-color: beige; */
    display: flex;
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
`;

export const CaracteristicaImagen = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 50%;
    height: 30%;
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
`;

export const ImagenPuebloMagico = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 33%;
    height: 100%;
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
`;