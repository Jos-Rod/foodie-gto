import styled from 'styled-components';

export const ContenedorGeneralBebidas = styled.div`
    height: 90vh;
    margin-top: 60px;
    min-height: 790px;
    position: relative;

    @media screen and (min-width: 1500px) {
        min-height: 1100px;
    }
`;

export const ContenedorNegro = styled.div`
    background-color: black;
    height: 37%;
    width: 100%;
    position: absolute;
    top: 0px;
`;

export const ContenedorInformacion = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5%;
    color: white;
    text-align: center;
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
`;

export const ImagenBebidaStyle = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
    height: 70%;
`;

export const ContenedorOtrasBebidasEImagen = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
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
`;

export const ContenedorOtrasBebidasImagen = styled.div`
    width: 55%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
`;