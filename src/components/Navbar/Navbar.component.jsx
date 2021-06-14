import React, { useContext, useState } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalNavbarStyled, ButtonLinkNavbar } from './Navbar.styling';
import logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ titlesAndLinks }) => {

    const { cremaColor } = useContext(ThemeContext);

    console.log("WOW");
    console.log(titlesAndLinks);

    return (
        <div>
            <div style={{ height: '30px', backgroundColor: 'black', width: '35px' }}></div>
            <PrincipalNavbarStyled>
                {titlesAndLinks.map(header => {
                    return (
                        <Link to={header.linkTo} key={header.linkTo}>
                            <ButtonLinkNavbar isSelected={header.isSelected} colorSelected={cremaColor}  >
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <p style={{ margin: '0px', alignSelf: 'center' }}>{header.title}</p>
                                </div>
                            </ButtonLinkNavbar>
                        </Link>
                    )
                })}
                <ButtonLinkNavbar style={{ marginTop: 'auto', marginBottom: 'auto', display: 'block', height: '70%', maxWidth: '140px' }}>
                    <img src={logo} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </ButtonLinkNavbar>
            </PrincipalNavbarStyled>
        </div>
    );
}

export default Navbar;
