import styled from 'styled-components';

export const ContenedorGeneralBebidas = styled.div`
    height: 90vh;
    margin-top: 60px;
    min-height: 790px;
    position: relative;

    @media screen and (min-width: 1500px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 420px) {
        margin-top: 0px;
        background-color: purple;
    }
`;

export const ContenedorNegro = styled.div`
    background-color: #1D1D1B;
    height: 30%;
    width: 100%;
    position: absolute;
    top: 0px;

    @media screen and (max-width: 420px) {
        margin-top: 20px;
    }
`;

export const ContenedorInformacion = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5%;
    color: white;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        height: 100%;
    }
`;

export const ContenedorBebidaStyle = styled.div`
    width: 25%;
    height: 40%;
    color: black;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: 768px) {
        width: 30%;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 50%;
    }

`;

export const ImagenBebidaStyle = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
    height: 70%;
    
    @media screen and (max-width: 420px) {
        /* width: 100%; */
        height: 80%;
    }
`;

export const ContenedorOtrasBebidasEImagen = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;

    @media screen and (max-width: 768px) {
        margin-top: 400px;
        height: 40vh;
    }

    @media screen and (max-width: 420px) {
        margin-top: 330vh;
    }

    @media screen and (max-width: 376px) {
        margin-top: 300vh;
        flex-direction: column;
        margin-bottom: -35%;
        height: 55vh;
    }
`;

export const ContenedorOtrasBebidas = styled.div`
    width: 45%;
    height: 63%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;

    @media screen and (max-width: 768px) {
        width: 60%;
        height: 70%;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        padding-top: 7%;
    }
`;

export const ContenedorOtrasBebidasImagen = styled.div`
    width: 55%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 40%;
        background-position-x: 57%;
    }

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const H1DisfrutalasFrias = styled.h1`
    display: ${props => props.onPhoneSize ? 'none' : 'block' };

    @media screen and (max-width: 420px) {
        display: ${props => props.onPhoneSize ? 'block' : 'none' };
        color: black;
        width: 100%;
        text-align: center;
        margin-top: 10%;
        font-size: 25pt;
        line-height: 1.3;
    }
`;

export const PBebidaTitle = styled.p`
    margin-top: 10px;
    
    @media screen and (max-width: 420px) {
        font-size: 18pt;
    }
`;

export const ContenedorListaBebidas = styled.div`
    display: block;
    width: 70%;
    @media screen and (max-width: 420px) {
        height: 45%;
        min-height: 127px;
    }
`;