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

    @media screen and (max-width: 420px) {
        flex-direction: column;
        height: 140vh;
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

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 90vh;
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

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 100%;
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

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 24vh;
        background-position: center;
        margin-top: 4%;
    }
`;

export const ContenedorDescripcionP = styled.div`
    width: 80%;
    
    @media screen and (max-width: 768px) {
        font-size: 8pt;
        width: 90%;
    }

    @media screen and (max-width: 420px) {
        font-size: 18pt;
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

    @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;
        height: 140vh;
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

    @media screen and (max-width: 420px) {
        width: 100%;
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

    @media screen and (max-width: 420px) {
        margin-top: 0px;
    }
`;

export const DivBlanco = styled.div`
    width: 33%;
    height: 1px;

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const ContenedorTituloPuebloMagico = styled.div`
    width: 66%;

    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const ContenedorDescripcionPuebloMagico = styled.div`
    display: flex;
    height: 45vh;
    width: 100%;
    background-color: beige;

    @media screen and (max-width: 768px) {
        height: 30vh;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column-reverse;
        height: 60vh;
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

    @media screen and (max-width: 420px) {
        height: 75vh;
        width: 100%;
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
    padding-bottom: 5vh;

    @media screen and (max-width: 768px) {
        font-size: 8pt;
        width: 60%;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        padding-bottom: 0vh;
        font-size: 12pt;
    }
`;

export const PDescripcionPuebloMagico = styled.p`
    display: ${props => props.onlyOnPhoneSize ? 'none' : 'block'};
    /* font-size: 8pt; */

    @media screen and (max-width: 768px) {
        width: 85%;
        margin-top: -10%;
        margin-left: 5%;
        font-size: 9pt;
    }

    @media screen and (max-width: 420px) {
        display: ${props => props.onlyOnPhoneSize ? 'block' : 'none'};
        width: 85%;
    }
`;