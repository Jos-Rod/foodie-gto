import styled from 'styled-components';

export const TituloSnacks = styled.h1`
    font-size: 40pt;
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const ContenedorFavoritosEImagen = styled.div`
    display: flex;
    height: 70vh;
`;

export const ContenedorFavoritos = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContenedorImagen = styled.div`
    width: 45%;
    background-color: cadetblue;
    background-image: url(${props => props.img});
    background-size: cover;
`;

export const ContenedorListaFavoritos = styled.div`
    width: 70%;
`;