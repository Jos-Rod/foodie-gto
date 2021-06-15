import styled from 'styled-components';

export const ListaHamburguesasEspeciales = styled.div`
    width: 50%;
    align-items: flex-start;
    align-content: flex-start;
    display: grid;
    padding-left: 5%;
    padding-right: 5%;
`;

export const ListaHamburguesasBasicas = styled.div`
    width: 50%;
    align-items: flex-start;
    align-content: flex-start;
    display: grid;
    padding-left: 5%;
    padding-right: 5%;
`;

export const CirculoHamburguesa = styled.div`
    width: 30%;
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
`;

export const ContenedorDeTemporada = styled.div`
    height: 60vh;
    display: flex;
    margin-top: 40px;
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
`;