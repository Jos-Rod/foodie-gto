import styled from 'styled-components';

export const ImagenPortadaStyled = styled.div`
    background-image: url(${props => props.img});
    height: 30vh;
    background-position: ${props => props.centered ? 'center' : 'top'};
    margin-top: 23px;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 768px) {
        height: 20vh;
    }
`;