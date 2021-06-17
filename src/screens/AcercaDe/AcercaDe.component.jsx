import React from 'react';
import { ContenedorPrimeraDescripcion, ContenedorNegroDescripcion, ImagenPuebloMagico, ContenedorDescripcionPuebloMagico, ContenedorTituloPuebloMagico, DivBlanco, ContenedorCaracteristicas, CaracteristicaImagen, CaracteristicaStyle, ContenedorDescripcionP, LogoFoodie, ContenedorDescripcionFoodie, ContenedorDescripcionImagen } from './AcercaDe.styling';
import imagenDescripcion from '../../imgs/fideos.jpg';
import imagenPuebloMagico from '../../imgs/puebloMagico.jpg';
import imagenLogo from '../../imgs/logo.png';
import iconoBurger from '../../imgs/icons/iconoBurger.png';
import iconoChile from '../../imgs/icons/iconoChile.png';
import iconoFire from '../../imgs/icons/iconoFire.png';
import iconoPapas from '../../imgs/icons/iconoPapas.png';
import imagenNosDistinguimosPor from '../../imgs/nosDistinguimosPor.jpg';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';

const listaCaracteristicas = [
    { description: <span>Uno de los mejores negocios de <br /> Hamburguesas de nuestra ciudad. <br />Contamos con recetas innovadoras</span>, img: iconoBurger },
    { description: <span>Nos caracterizamos por hacer <br />nuestras propias salsas para <br />brindar sabores originales</span>, img: iconoChile },
    { description: <span>Nuestros alimentos son preparados <br /> en el momento para que lleguen <br />calientitos a nuestros clientes</span>, img: iconoFire },
    { description: <span>Los complementos y snacks demás <br />de deliciosos están a precios accesi- <br />bles por una buena cantida</span>, img: iconoPapas },
];

const Caracteristica = ({ description, img }) => {
    return (
        <>
            <CaracteristicaStyle>
                <CaracteristicaImagen img={img} />
                <p className="centered">{description}</p>
            </CaracteristicaStyle>
        </>
    )
}


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
            <ImagenPortadaPaginas height='60vh' title='Nos distinguimos por' img={imagenNosDistinguimosPor} />
            <ContenedorCaracteristicas>
                {
                    listaCaracteristicas.map(e => {
                        return <Caracteristica description={e.description} img={e.img} />
                    })
                }
            </ContenedorCaracteristicas>
            <div style={{display: 'flex'}}>
                <DivBlanco />
                <ContenedorTituloPuebloMagico>
                    <h1 className="title centered" style={{margin: '20px'}}>El pueblo mágico...</h1>
                </ContenedorTituloPuebloMagico>
            </div>
            <ContenedorDescripcionPuebloMagico>
                <ImagenPuebloMagico img={imagenPuebloMagico} />
                <ContenedorNegroDescripcion>
                    <p style={{display: 'block', paddingBottom: '5vh'}}>
                        Nos encontramos ubicados en el pueblo Mágico de Yuriria Gto. una ciudad <br />
                        fundada en 1540 por agustinos y esta se encuentra en el sur del estado. <br />
                        Un dato interesante es el nombre de nuestra ciudad: <br />
                        Yuriria es un nombre de origen purépecha, derivado de "Yuririapúndaro", <br />
                        vocablo que significa "Lago de sangre"
                    </p>
                </ContenedorNegroDescripcion>
            </ContenedorDescripcionPuebloMagico>
        </>
    )
}

export default AcercaDe;