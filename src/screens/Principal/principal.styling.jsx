import styled from 'styled-components';

export const CicrulosComidasListStyled = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
`;

export const ImagenEspecialSemana = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    height: 43vh;
    width: 100%;
    display: inline-block;
`;