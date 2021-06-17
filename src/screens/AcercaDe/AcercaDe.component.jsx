import React from 'react';
import {ContenedorPrimeraDescripcion, ContenedorDescripcionP, LogoFoodie, ContenedorDescripcionFoodie, ContenedorDescripcionImagen} from './AcercaDe.styling';
import imagenDescripcion from '../../imgs/fideos.jpg';
import imagenLogo from '../../imgs/logo.png';

const AcercaDe = () => {
    return (
        <>
            <ContenedorPrimeraDescripcion>
                <ContenedorDescripcionFoodie>
                    <LogoFoodie img={imagenLogo} />
                    <ContenedorDescripcionP>
                        <p>
                        Somos una empresa dedicada a preparación y venta de alimentos y platillos, utilizando nuestro
                        conocimiento y fucionando la comida mexicana y estadounidense de alguna manera.
                        <br />
                        Todos los alimentos son preparados al momento de ordenar, es por ello que nos caracterizamos
                        por brindar un servicio confiable, fresco, delicioso e innovador.
                    </p>
                    </ContenedorDescripcionP>
                </ContenedorDescripcionFoodie>
                <ContenedorDescripcionImagen img={imagenDescripcion} />
            </ContenedorPrimeraDescripcion>

            <div style={{height: '10vh'}}></div>
        </>
    )
}

export default AcercaDe;