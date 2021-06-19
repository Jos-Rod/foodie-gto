import styled from 'styled-components';

export const ImagenPortadaStyled = styled.div`
    background-image: url(${props => props.img});
    height: ${props => props.height};
    background-position: ${props => props.centered ? 'center' : 'top'};
    margin-top: ${props => props.withMarginTop ? '23px' : '0px'}; 
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    justify-items: center;
    color: ${props => props.textColor};
    font-size: 40pt;

    @media screen and (max-width: 768px) {
        height: ${props => props.heightOniPad}; 
        background-position-y: ${props => props.yOffSiteIPad};
        font-size: 16pt;
    }

    @media screen and (max-width: 420px) {
        height: ${props => props.heightOnIPhone};
        background-position-y: ${props => props.yOffSiteiPhone};
        font-size: 14pt;
    }

`;