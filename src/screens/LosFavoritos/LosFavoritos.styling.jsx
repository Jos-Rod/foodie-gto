import styled from 'styled-components';

export const TituloSnacks = styled.h1`
    font-size: 40pt;
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const ContenedorFavoritosEImagen = styled.div`
    display: flex;
    height: 70vh;

    @media screen and (min-width: 768px) {
        height: 50vh;
    }
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
    background-image: url(${props => props.img});
    background-size: cover;
`;

export const ContenedorListaFavoritos = styled.div`
    width: 70%;
`;

export const ContenedorSalsas = styled.div`
    margin-top: 40px;
    height: 70vh;

    @media screen and (min-width: 1500px) {
        height: 20vh;
        min-height: 850px;
    }

    @media screen and (min-width: 768px) {
        height: 80vh;
        min-height: 600px;
        /* background-color: brown; */
    }
`;

export const CirculoSalsa = styled.div`
    border: ${props => props.color} 9px solid;
    border-radius: 50%;
    width: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'SpecialElite';

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const DescripcionSalsa = styled.p`
    font-size: 20pt;
`;

export const CirculosDesktop = styled.div`
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const CirculosIPad = styled.div`
    height: 100%;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    display: none;
    
    @media screen and (max-width: 768px) {
        visibility: visible;
        display: flex;
    }
`;

