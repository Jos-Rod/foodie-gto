import styled from 'styled-components';

export const ContainerHamburguesas = styled.div`
    display: flex;
    height: 30vh;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }

    @media screen and (max-width: 420px) {
        height: 50vh;
    }
`;

export const ListaHamburguesasEspeciales = styled.div`
    width: 50%;
    align-items: flex-start;
    align-content: flex-start;
    display: grid;
    padding-left: 5%;
    padding-right: 5%;

    @media screen and (max-width: 768px) {
        width: 80%;
        padding: 0px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ListaHamburguesasBasicas = styled.div`
    width: 50%;
    align-items: flex-start;
    align-content: flex-start;
    display: grid;
    padding-left: 5%;
    padding-right: 5%;

    @media screen and (max-width: 768px) {
        width: 80%;
        padding: 0px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const CirculoHamburguesa = styled.div`
    width: 30%;
    display: ${props => props.showOnlyOnPhone ? 'none' : 'block'};

    @media screen and (max-width: 420px) {
        width: 100%;
        display: ${props => props.hiddenOnPhone ? 'none' : 'block'};
    }
`;

export const CirculoHamburguesaImagen = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;

    @media screen and (max-width: 420px) {
        width: 100%;
    }
`;

export const ContenedorDeTemporada = styled.div`
    height: 60vh;
    display: flex;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        height: 40vh;
    }
`;

export const ContenedorDeTemporadaDescripcion = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContenedorNegro = styled.div`
    height: 60%;
    background-color: black;
    color: white;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
`;

export const ContenedorImagenDeTemporada = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 40%;
    display: block;
    background-position: center;
`;

export const ContenedorImagenHamburguesa = styled.div`
    width: 65%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
        width: 85%;
    }

    @media screen and (max-width: 420px) {
        width: 50%;
    }
`;

export const DescripcionTemporadaP = styled.h2`
    width: 100%;
    text-align: center;
    padding-left: 10%;

    @media screen and (max-width: 768px) {
        font-size: 15pt;
    }
`;

export const ContenedorCualElegirias = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;