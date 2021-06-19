import styled from 'styled-components';

export const CirculoComidaStyled = styled.div`
    height: 30vh;
    width: 20%;
    max-width: 200px;
    display: inline-block;
    padding: 10px;

    @media screen and (max-width: 768px) {
        width: 25%;
        max-width: 1000px;
    }

    @media screen and (max-width: 420px) {
        width: 40%;
        padding: 0px;
        padding-right: 4%;
        padding-left: 4%;
        font-size: 10pt;
    }

`;

export const ImageCircleSyled = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    border-radius: 50%;
`;