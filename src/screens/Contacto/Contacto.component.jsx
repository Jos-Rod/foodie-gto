import React, { useContext } from 'react';
import { ContenedorGeneral, ContenedorImagen, ContenedorInputContacto, ContenedorDatosContacto, ContenedorImagenParent, ContenedorInputs, ContenedorContactanos } from './Contacto.styling';
import imagenLogo from '../../imgs/logo.png';
import ThemeContext from '../../providers/Theme/Theme.provider';

const InputContacto = ({ inputText, isMensaje }) => {
    return (
        <>
            <ContenedorInputContacto>
                <p style={{ margin: '0px', textAlign: 'left', width: '100%' }}>{inputText}*</p>
                {
                    !isMensaje ?
                        <input type="text" style={{ width: '97%' }} /> :
                        <textarea name="Mensaje" cols="30" rows="4" style={{ width: '97%', height: '80px' }}></textarea>
                }
            </ContenedorInputContacto>
        </>
    )
}

const Contacto = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <ContenedorGeneral>
                <ContenedorImagenParent>
                    <ContenedorImagen img={imagenLogo} />
                </ContenedorImagenParent>
                <ContenedorDatosContacto>
                    <ContenedorContactanos>
                        <h1 className="title centered">¡Contáctanos!</h1>
                    </ContenedorContactanos>
                    <ContenedorInputs color={cremaColor}>
                        <InputContacto inputText='Nombre' />
                        <InputContacto inputText='Apellido' />
                        <InputContacto inputText='Email' />
                        <InputContacto inputText='Asunto' />
                        <InputContacto inputText='Mensaje' isMensaje />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '80%' }}>
                            <button style={{
                                backgroundColor: 'black',
                                color: 'white'
                            }}>Enviar</button>
                        </div>
                    </ContenedorInputs>
                </ContenedorDatosContacto>
            </ContenedorGeneral>
            <div style={{ height: '10vh' }}></div>
        </>
    )
}

export default Contacto;

