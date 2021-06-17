import styled from "styled-components";

export const ContenedorPrimeraDescripcion = styled.div`
    width: 100%;
    /* background-color: beige; */
    height: 80vh;
    min-height: 525px;
    display: flex;
`;

export const ContenedorDescripcionFoodie = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContenedorDescripcionImagen = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const LogoFoodie = styled.div`
    background-image: url(${props => props.img});
    width: 50%;
    height: 50%;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ContenedorDescripcionP = styled.div`
    width: 80%;
`;