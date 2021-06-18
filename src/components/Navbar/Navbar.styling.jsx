import styled from 'styled-components';

export const PrincipalNavbarStyled = styled.div`
    border-top: 2px black solid;
    border-bottom: 2px black solid;
    height: 60px;
    display: flex;
    justify-content: center;
    padding-left: 40px;
    padding-right: 20px;

    @media screen and (max-width: 768px) {
        padding-left: 1px;
    }

    @media screen and (max-width: 420px) {
        display: none;
    }
`;

export const ButtonLinkNavbar = styled.div`
    ${props => props.isSelected ? 'background-color: ' + props.colorSelected +';' : 'background-color: white;'};
    height: 100%;
    display: block;
    align-items: center;
    min-width: 70px;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
    ${props => props.isSelected ? 'border-left: 2px black solid; border-right: 2px black solid;' : '' };
    
    
    @media screen and (max-width: 768px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 420px) {
        font-size: 8pt;
    }
`;

// Phone size
export const PrincipalNavbarStyledPhoneSize = styled.div`
    display: none;

    @media screen and (max-width: 420px) {
        display: flex;
        border-top: ${props => props.withoutTopBorder ? '' : '2px black solid'} ;
        border-bottom: 2px black solid;
        height: 45px;
        width: 100%;
    }
`;