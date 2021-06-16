import styled from "styled-components";

export const ContenedorListaConPrecioParent = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    /* display: grid; */
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
`;

export const RowListaConPrecio = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px;
    width: 100%;
`;

export const ElementoListaConPrecio = styled.p`
    text-align: center;
    display: block;
    margin: 0px;
    margin-top: ${props => props.childrenWithMargin ? '20px' : '0px'};

    @media screen and (max-width: 768px) {
        font-size: 11pt;
    }
`;