import React, { useContext } from 'react';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { PrincipalFooterStyled, LogoFooterStyled, LogoFooterStyledPhoneSize, ContainerRedesSociales, PrincipalFooterStyledPhoneSize, YuririaTexto, DescripcionesTexto } from './Footer.styling';
import logo from '../../imgs/logo.png';
import iconoWhatsapp from '../../imgs/icons/iconoWhatsapp.png';
import iconoFacebook from '../../imgs/icons/iconoFacebook.png';
import iconoInstagram from '../../imgs/icons/iconoInstagram.png';

const Footer = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <footer style={{ position: 'absolute', bottom: '-1vh', right: '0px', left: '0px', minHeight: '133px', marginBottom: '-14vh', width: '100$' }}>
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
                            <YuririaTexto className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom: '10px' }}>Servicio:</YuririaTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Martes-Viernes 9:00am a 5:30pm</DescripcionesTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Sábado-Domingo 9:00am a 6:00pm</DescripcionesTexto>
                        </div>
                        {/* Redes sociales. */}
                        <ContainerRedesSociales>
                            <div style={{ width: '100%', height: '50%' }}>
                                <div style={{ width: '100%', backgroundImage: `url(${iconoWhatsapp})`, height: '70%', backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}></div>
                            </div>
                            <div style={{ width: '50%', height: '50%', display: 'inline-block' }}>
                                <div style={{ width: '100%', backgroundImage: `url(${iconoInstagram})`, height: '65%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}></div>
                            </div>
                            <div style={{ width: '50%', height: '50%', display: 'inline-block' }}>
                                <div style={{ width: '100%', backgroundImage: `url(${iconoFacebook})`, height: '65%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}></div>
                            </div>
                        </ContainerRedesSociales>
                        {/* Yuriria, Gto. */}
                        <div style={{ display: 'inline-block', textAlign: 'right' }}>
                            <YuririaTexto className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom: '10px' }}>4471315212</YuririaTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite" style={{ margin: '0px' }}>¡Síguenos en nuestras <br /> redes sociales!</DescripcionesTexto>
                        </div>

                    </div>
                </PrincipalFooterStyled>
                <PrincipalFooterStyledPhoneSize color={cremaColor}>
                    <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <p className="fontFSpecialElite">Yuriria, Gto</p>
                        </div>
                        <LogoFooterStyledPhoneSize img={logo} />
                    </div>
                    <div style={{ width: '55%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ width: '90%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom: '10px', textAlign: 'right' }}>Servicio:</p>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Martes-Viernes 9:00am a 5:30pm</DescripcionesTexto>
                            <DescripcionesTexto className="noMargin fontFSpecialElite">Sábado-Domingo 9:00am a 6:00pm</DescripcionesTexto>
                        </div>
                        <div style={{ width: '100%', height: '50%', display: 'flex', }}>
                            <div style={{ width: '30%' }}>
                                <div style={{ width: '100%', height: '50%' }}>
                                    <div style={{ width: '100%', backgroundImage: `url(${iconoWhatsapp})`, height: '70%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}></div>
                                </div>
                                <div style={{ width: '50%', height: '50%', display: 'inline-block' }}>
                                    <div style={{ width: '100%', backgroundImage: `url(${iconoInstagram})`, height: '65%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></div>
                                </div>
                                <div style={{ width: '50%', height: '50%', display: 'inline-block' }}>
                                    <div style={{ width: '100%', backgroundImage: `url(${iconoFacebook})`, height: '65%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></div>
                                </div>
                            </div>
                            <div style={{ width: '70%', paddingRight: '10%' }}>
                                <p className="noMargin fontFSpecialElite" style={{ margin: '0px', marginBottom: '10px', textAlign: 'right' }}>4451315212</p>
                                <DescripcionesTexto className="noMargin fontFSpecialElite">¡Síguenos en nuestras <br />redes sociales!</DescripcionesTexto>
                            </div>
                        </div>
                    </div>
                </PrincipalFooterStyledPhoneSize>
            </footer>
        </>
    );
}

export default Footer;