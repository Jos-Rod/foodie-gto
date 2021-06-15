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
`;

export const DescripcionDesayuno = styled.div`
    width: 50%;
    text-align: center;
    overflow: hidden;
    position: relative;
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
`;

export const ImagenDesayuno = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    /* margin-top: -30px; */
    /* position: absolute; */
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
`;

export const ContainerDesayunosLista = styled.div`
    margin-left: 40px;
    width: 60%;
    height: 80%;
    display: grid;
    flex-direction: column;
    align-items: center;
    align-content: center;
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