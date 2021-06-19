import styled from 'styled-components';

export const CicrulosComidasListStyled = styled.div`
    /* padding-left: 25px;
    padding-right: 25px; */
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: inline-block;
        justify-content: center;
        justify-items: center;
        text-align: center;
        width: 100%;
        margin-bottom: 0px;
    }

    @media screen and (max-width: 420px) {
        padding-left: 0px;
        padding-right: 0px;
        display: inline-block;
        justify-items: flex-end;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;
        flex-direction: column;
        text-align: center;
    }
`;

export const ImagenEspecialSemanaList = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: inherit;
    }
`;

export const ImagenEspecialSemana = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    height: 43vh;
    width: 100%;
    display: inline-block;

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-top: -3px;
    }
`;

export const ImagenPortada = styled.div`
    background-image: url(${props => props.img});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: contain;
    width: 100%;
    height: 90vh;
    position: relative;

    @media screen and (max-width: 768px) {
        margin-top: 50px;
        background-size: 100%;
        height: 60vh;
        background-position: center;
    }

    @media screen and (max-width: 420px) {
        height: 40vh;
        display: flex;
        align-items: center;
        background-position: center;
        justify-content: center;
    }
`;

export const ImagenLogoCentro = styled.div`
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    position: absolute;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) {
        background-size: 70%;
    }

    @media screen and (max-width: 420px) {
        height: 50%;
        width: 50%;
        background-size: contain;
        background-position: center;
    }
`;

export const ContainerPrincipalBienvenido = styled.div`

    @media screen and (max-width: 768px) {
        height: 60vh;
    }

    @media screen and (max-width: 420px) {
        margin-top: 40%;
        height: 50vh;
    }
`;

export const ContenedorTituloBienvenido = styled.div`
    position: absolute;
    left: 5%;

    @media screen and (max-width: 420px) {
        top: -10%;
        display: flex;
        justify-content: center;
        width: 100%;
        left: 0%;
    }
`;

export const H1TipoAntojo = styled.h1`
    position: absolute;
    bottom: 4px;
    right: 5%;
    font-family: 'SpecialElite';

    @media screen and (max-width: 420px) {
        display: none;
    }
`;


export const H1TipoAntojoiPhoneSize = styled.h1`
    display: none;
    position: absolute;
    bottom: 4px;

    @media screen and (max-width: 420px) {
        bottom: -50px;
        display: block;
        text-align: center;
        font-family: 'SpecialElite';
    }
`;

export const H1EncuentraLoQue = styled.h1`
    font-size: 25pt;
    margin-top: 0px;
`;

export const ContainerLoQueNecesites = styled.div`
    margin-top: 60px;

    @media screen and (max-width: 420px) {
        margin-top: 10px;
    }
`;