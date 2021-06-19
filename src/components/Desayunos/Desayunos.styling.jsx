import styled from 'styled-components';

export const DetalleAlmuerzos = styled.div`
    background-color: ${props => props.color};
    height: 50vh;
    display: flex;
    padding-bottom: 5vh;
    min-height: 375px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        height: 10vh;
        padding-bottom: 3vh;
    }

    @media screen and (max-width: 420px) {
        height: 70vh;
        padding-bottom: 0vh;
        flex-direction: column;
    }
`;

export const SuperiorRadius = styled.div`
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 20vh;
    width: 100%;
    background-color: ${props => props.color};

    @media screen and (max-width: 768px) {
        height: 10vh;
    }

    @media screen and (max-width: 420px) {
        height: 5vh;
    }
`;

export const DescripcionDesayuno = styled.div`
    width: 50%;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px) {
        height: 90%;
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 100%;
        
    }
`;

export const TituloDesayuno = styled.h1`
    text-align: center;
    font-size: 30pt;
    margin: 0px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 20pt;
    }
    
    @media screen and (max-width: 768px) {
        margin: 0px;
    }
`;

export const ContenedorImagen = styled.div`
    width: 50%;
    position: relative;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 60%;
        margin-top: 10px;
    }
`;

export const ImagenDesayuno = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const ImagenDesayunoPhoneSize = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    /* margin-top: -30px; */
    /* position: absolute; */
    display: none;

    @media screen and (max-width: 420px) {
        background-size: cover;
        display: block;

    }
`;

export const CuadroBlanco = styled.div`
    background-color: white;
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 420px) {
        background-size: contain;
        height: 100%;
    }
`;

export const ContainerDesayunosLista = styled.div`
    width: 100%;
    height: 50%;
`;

export const TablaDesayunos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px;
    width: 100%;
`;

export const DescripcionDesayunoPrecio = styled.p`
    text-align: left;
    display: block;
    margin: 0px;

    @media screen and (max-width: 768px) {
        font-size: 11pt;
    }

    @media screen and (max-width: 420px) {
        margin-bottom: 3px;
    }
`;

export const DetalleTorta = styled.div`
    height: 60vh;
    display: flex;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 35vh;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column-reverse;
        height: 80vh;
        justify-content: flex-end;
    }
`;

export const ContenedorImagenTorta = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
    width: 50%;
    height: 0;
    padding-bottom: 100%;
    margin-right: 0px;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 100%;
        padding-bottom: 0%;
        background-size: cover;
        z-index: 1;
        margin-top: -30px;
    }
`;

export const ContenedorNegro = styled.div`
    background-color: black;
    padding-right: 20%;
    padding-left: 20%;
    height: 50%;
    color: white;

    @media screen and (max-width: 768px) {
        height: 60%;
    }

    @media screen and (max-width: 420px) {
        height: 100%;
        width: 85%;
        padding-right: 0%;
        padding-left: 0%;
        z-index: 2;
        display: flex;
        align-content: center;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const ContenedorDetalleTortas = styled.div`
    width: 50%;

    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const ContenedorTortasLista = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    display: grid;
    flex-direction: column;
    padding-right: 20%;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 420px) {
        width: 80%;
        padding-right: 0%;
    }
`;

export const DescripcionTortaPrecio = styled.p`
    text-align: center;
    display: block;
    margin: 0px;
`;

export const TablaTorta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0px;
    width: 100%;
`;

export const H1Desayuno = styled.h1`
    display: block;

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const H1DesayunoPhoneSize = styled.h1`
    display: none;

    @media screen and (max-width: 420px) {
        display: block;
    }
`;

export const PDesayunos = styled.p`
    display: block;
    text-align: left;
    /* margin-left: 5%;
    margin-top: 10%; */
    width: 100%;
    margin: 0px;
    margin-bottom: 10px;
    margin-left: -6%;

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const ContainerListaDesayunosParent = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 420px) {
        display: flex;
        align-items: center;
    }
`;

export const ContenedorImagenChild = styled.div`
    width: 90%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 420px) {
        margin-right: 0px;
        margin-left: 0px;
        width: 100%;
        height: 100%;
    }
`;

export const DivDivisor = styled.div`
    height: 100px;
    @media screen and (max-width: 420px) {
        height: 10px;
    }
`;