import React, { useContext } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalFooterStyled, LogoFooterStyled, YuririaTexto, DescripcionesTexto } from './Footer.styling';
import logo from '../../imgs/logo.png';

const Footer = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <footer style={{ position: 'absolute', bottom: '-1vh', right: '0px', left: '0px', marginBottom: '-14vh', width: '100$' }}>
                <PrincipalFooterStyled color={cremaColor}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                        {/* Logo */}
                        <LogoFooterStyled img={logo}></LogoFooterStyled>
                        {/* Yuriria, Gto. */}
                        <div style={{ display: 'inline-block' }}>
                            <YuririaTexto className="fontFSpecialElite">Yuriria, Gto.</YuririaTexto>
                        </div>
                        {/* Horario */}
                        <div style={{ display: 'inline-block', textAlign: 'center' }}>
                            <YuririaTexto className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom:'10px' }}>Servicios</YuririaTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Martes-Viernes 9:00am a 5:30pm</DescripcionesTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Sábado-Domingo 9:00am a 6:00pm</DescripcionesTexto>
                        </div>
                        {/* Redes sociales. */}
                        <div style={{ display: 'inline-block' }}>
                            <YuririaTexto className="fontFSpecialElite">Redes</YuririaTexto>
                        </div>
                        {/* Yuriria, Gto. */}
                        <div style={{ display: 'inline-block', textAlign: 'right' }}>
                            <YuririaTexto className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom:'10px' }}>4471315212</YuririaTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite" style={{ margin: '0px' }}>¡Síguenos en nuestras <br/> redes sociales!</DescripcionesTexto>
                        </div>
                        
                    </div>
                </PrincipalFooterStyled>
            </footer>
        </>
    );
}

export default Footer;