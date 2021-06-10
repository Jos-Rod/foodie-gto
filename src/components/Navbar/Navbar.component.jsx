import React, { useContext } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalNavbarStyled, ButtonLinkNavbar } from './Navbar.styling';
import logo from '../../imgs/logo.png';

const Navbar = () => {

    const { cremaColor } = useContext(ThemeContext);

    console.log("theme");
    console.log(cremaColor);

    const titlesAndLinks = [{ title: "Home", isSelected: true }, { title: "Menú diario" }, { title: "Los favoritos" }, { title: "Bebidas" }, { title: "Acerca de Foodie" }, { title: "Contacto" }];

    return (
        <div>
            <div style={{ height: '30px', backgroundColor: 'black', width: '35px' }}></div>
            <PrincipalNavbarStyled>
                {titlesAndLinks.map(header => {
                    return (
                        <ButtonLinkNavbar isSelected={header.isSelected} colorSelected={cremaColor}>
                            <div style={{ margin: 'auto' }}>
                                <p>{header.title}</p>
                            </div>
                        </ButtonLinkNavbar>)
                })}
                <ButtonLinkNavbar style={{ marginTop: 'auto', marginBottom: 'auto', display: 'block', height: '70%', maxWidth: '140px' }}>
                    <img src={logo} style={{maxWidth: '100%', maxHeight: '100%'}} />
                </ButtonLinkNavbar>
            </PrincipalNavbarStyled>
        </div>
    );
}

export default Navbar;
