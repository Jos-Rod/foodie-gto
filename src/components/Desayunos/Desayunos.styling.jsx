import styled from 'styled-components';

export const DetalleAlmuerzos = styled.div`
    background-color: ${props => props.color};
    height: 60vh;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 15vh;

    @media screen and (max-width: 768px) {
        height: 45vh;
        padding-top: 5vh;
    }

    @media screen and (max-width: 420px) {
        height: 100vh;
        width: 100%;
    }
`;

export const DescripcionDesayuno = styled.div`
    width: 50%;
    text-align: center;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const TituloDesayuno = styled.h1`
    text-align: center;
    font-size: 30pt;
    
    @media screen and (max-width: 768px) {
        margin: 0px;
    }
`;

export const ContenedorImagen = styled.div`
    width: 50%;
    position: relative;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 46%;
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

    @media screen and (max-width: 420px) {
        background-size: contain;
    }
`;

export const CuadroBlanco = styled.div`
    background-color: white;
    margin-left: 40px;
    /* padding: 20px; */
    position: absolute;
    bottom: 40px;
    top: 150px;
    width: 100%;

    @media screen and (max-width: 768px) {
        top: 120px;
    }

    @media screen and (max-width: 420px) {
        top: 110px;
        width: 90%;
        margin-left: 0px;
        height: 90%;
        bottom: 0px;
    }
`;

export const ContainerDesayunosLista = styled.div`
    margin-left: 40px;
    width: 60%;
    height: 80%;
    display: grid;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: left;
    position: absolute;
    top: 60px;
    bottom: '';

    @media screen and (max-width: 420px) {
        margin-left: 13px;
        width: 90%;
        top: 0px;
    }
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
    height: 35vh;
    display: flex;
    overflow: hidden;
`;

export const ContenedorImagenTorta = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
    width: 50%;
    height: 0;
    padding-bottom: 100%;
    margin-right: 0px;
`;

export const ContenedorNegro = styled.div`
    background-color: black;
    padding-right: 20%;
    padding-left: 20%;
    height: 50%;

    @media screen and (max-width: 768px) {
        height: 65%;
    }
`;

export const ContenedorDetalleTortas = styled.div`
    width: 50%;
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

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const ContainerListaDesayunosParent = styled.div`
    padding-left: 20px;
    width: 70%;
    height: 100%;

    @media screen and (max-width: 420px) {
        padding-left: 0px;
        width: 100%;
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