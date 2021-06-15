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