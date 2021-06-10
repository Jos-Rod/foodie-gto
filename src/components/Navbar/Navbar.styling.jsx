import styled from 'styled-components';

export const PrincipalNavbarStyled = styled.div`
    border-top: 2px black solid;
    border-bottom: 2px black solid;
    height: 60px;
    display: flex;
    justify-content: center;
    padding-left: 40px;
    padding-right: 20px;
`;

export const ButtonLinkNavbar = styled.div`
    ${props => props.isSelected ? 'background-color: ' + props.colorSelected +';' : 'background-color: white;'};
    height: 100%;
    display: block;
    align-items: center;
    min-width: 90px;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    ${props => props.isSelected ? 'border-left: 2px black solid; border-right: 2px black solid;' : '' };
`;