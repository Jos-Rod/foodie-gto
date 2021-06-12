import React, { useContext } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalFooterStyled } from './Footer.styling';
import logo from '../../imgs/logo.png';

const Footer = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <footer style={{ position: 'absolute', bottom: '-1vh', right: '0px', left: '0px', marginBottom: '-14vh', width: '100$' }}>
                <PrincipalFooterStyled color={cremaColor}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                        {/* Logo */}
                        <div style={{
                            backgroundImage: `url(${logo})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '70%',
                            width: '15%',
                            display: 'inline-block',
                        }}></div>
                        {/* Yuriria, Gto. */}
                        <div style={{ display: 'inline-block' }}>
                            <h2 className="fontFSpecialElite">Yuriria, Gto.</h2>
                        </div>
                        {/* Horario */}
                        <div style={{ display: 'inline-block', textAlign: 'center' }}>
                            <h3 className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom:'10px' }}>Servicios</h3>
                            <p className="noMargin fontFSpecialElite" style={{ margin: '0px' }}>Martes-Viernes 9:00am a 5:30pm</p>
                            <p className="noMargin fontFSpecialElite" style={{ margin: '0px' }}>Sábado-Domingo 9:00am a 6:00pm</p>
                        </div>
                        {/* Redes sociales. */}
                        <div style={{ display: 'inline-block' }}>
                            <h2 className="fontFSpecialElite">Redes</h2>
                        </div>
                        {/* Yuriria, Gto. */}
                        <div style={{ display: 'inline-block', textAlign: 'right' }}>
                            <h2 className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom:'10px' }}>4471315212</h2>
                            <p className="noMargin fontFSpecialElite" style={{ margin: '0px', fontSize: '13pt' }}>¡Síguenos en nuestras <br/> redes sociales!</p>
                        </div>
                        
                    </div>
                </PrincipalFooterStyled>
            </footer>
        </>
    );
}

export default Footer;