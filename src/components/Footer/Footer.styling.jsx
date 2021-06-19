import styled from 'styled-components';

export const PrincipalFooterStyled = styled.div`
    background-color: ${props => props.color};
    height: 20vh;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: -10px;

    @media screen and (max-width: 114px) {
        
    }

    @media screen and (max-width: 420px) {
        display: none;
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

    @media screen and (max-width: 420px) {
        font-size: 8pt;
        text-align: right;
    }
`;

export const PrincipalFooterStyledPhoneSize = styled.div`
    display: none;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    @media screen and (max-width: 420px) {
        display: flex;
        width: 100%;
        background-color: ${props => props.color};
        height: 20vh;
    }
`;

export const LogoFooterStyledPhoneSize = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    width: 65%;
    height: 50%;
`;

export const ContainerRedesSociales = styled.div`
    display: inline-block;
    height: 70%;
    width: 78px;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 40%;
    }

    @media screen and (max-width: 420px) {
        display: none;
    }
`;