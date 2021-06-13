import styled from 'styled-components';

export const PrincipalFooterStyled = styled.div`
    background-color: ${props => props.color};
    height: 20vh;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: -10px;

    @media screen and (max-width: 768px) {
        height: 16vh;
        padding-top: 20px;
    }
`;

export const LogoFooterStyled = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 70%;
    width: 15%;
    display: inline-block;
`;

export const YuririaTexto = styled.h2`
    @media screen and (max-width: 768px) {
        font-size: 13pt;
    }
`;

export const DescripcionesTexto = styled.p`
    margin: 0px;

    @media screen and (max-width: 768px) {
        font-size: 10pt;
    }
`;