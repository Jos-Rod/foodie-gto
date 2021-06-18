import React, { useContext, useState } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalNavbarStyled, ButtonLinkNavbar, PrincipalNavbarStyledPhoneSize } from './Navbar.styling';
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
                {
                    titlesAndLinks.map(header => {
                        return (
                            <Link to={header.linkTo} key={header.linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
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
            <PrincipalNavbarStyledPhoneSize>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', width: '17%', marginLeft: '33px', marginRight:'50px' }}>
                    <ButtonLinkNavbar isSelected colorSelected={cremaColor} style={{}}  >
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ margin: '0px', alignSelf: 'center' }}>Home</p>
                        </div>
                    </ButtonLinkNavbar>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', width: '38%' }}>
                    <ButtonLinkNavbar  colorSelected={cremaColor}  >
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ margin: '0px', alignSelf: 'center' }}>Menú diario</p>
                        </div>
                    </ButtonLinkNavbar>
                </Link>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', width: '38%' }}>
                    <ButtonLinkNavbar colorSelected={cremaColor} style={{}}  >
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ margin: '0px', alignSelf: 'center' }}>Los favoritos</p>
                        </div>
                    </ButtonLinkNavbar>
                </Link>
            </PrincipalNavbarStyledPhoneSize>
        </div>
    );
}

export default Navbar;
