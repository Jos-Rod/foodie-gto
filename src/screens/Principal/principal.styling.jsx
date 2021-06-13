import styled from 'styled-components';

export const CicrulosComidasListStyled = styled.div`
    padding-left: 25px;
    padding-right: 25px;
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
        background-size: 100%;
        height: 90vh;
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
`;
