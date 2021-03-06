import styled from "styled-components";

export const ContenedorGeneral = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    min-height: 600px;

    @media screen and (max-width: 768px) {
        height: 70vh;
    }

    @media screen and (max-width: 420px) {
        flex-direction: column;
        height: 100vh;
    }
`;

export const ContenedorImagenParent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 40%;
    }
`;

export const ContenedorImagen = styled.div`
    width: 80%;
    height: 100%;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background
`;

export const ContenedorDatosContacto = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 100%;
    }
`;

export const ContenedorContactanos = styled.div`
    height: 25%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

export const ContenedorInputs = styled.div`
    background-color: ${props => props.color};
    height: 70%;
    width: 90%;
    min-height: 350px;
    max-width: 420px;
    min-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 55%;
    }

    @media screen and (max-width: 420px) {
        height: 70%;
    }
`;

export const ContenedorInputContacto = styled.div`
    width: 80%;
    margin-bottom: 8px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;