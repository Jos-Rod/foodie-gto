import React from 'react';
import { ListaHamburguesasEspeciales, ContainerHamburguesas, DescripcionTemporadaP, ContenedorImagenHamburguesa, ContenedorDeTemporada, ContenedorImagenDeTemporada, ContenedorNegro, ContenedorDeTemporadaDescripcion, ListaHamburguesasBasicas, CirculoHamburguesa, CirculoHamburguesaImagen } from './Hamburguesas.styling';
import ContenedorListaConPrecio from '../ContenedorListaConPrecio/ContenedorListaConPrecio.component';
import hamburguesaCentro from '../../imgs/hamburguesaCentro.jpeg';
import hamburguesaChickenSupreme from '../../imgs/hamburguesaChickenSupreme.jpeg';
import imagenTemporada from '../../imgs/deTemporada.jpeg';
import hamburguesaSupreme from '../../imgs/hamburguesaSuprema.jpeg';

const listaHamburguesasEspeciales = [
    { title: 'Hamburguesa master (sirloin, costra de queso, tocino', precio: '$65' },
    { title: 'Hamburguesa vaquera (arrachera y costra de queso mozarella', precio: '$70' },
    { title: <span>Hamburguesa chiquen supreme (pollo crujiente, aros de cebolla, <br /> tocino, costra de queso y queso parmesano)</span>, precio: '$80' },
    { title: <span>Hamburquesa suprema (sirloin, aros de cebolla, tocino, costra de queso <br /> y queso parmesano)</span>, precio: '$80' }
];

const listaHamburguesasBasicas = [
    { title: 'Hamburguesa de pollo crujiente', precio: '$50' },
    { title: 'Hamburguesa de res', precio: '$50' },
];

const Hamburguesas = () => {
    return (
        <>
            <ContainerHamburguesas>
                <ListaHamburguesasEspeciales >
                    <h3 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Hamburgueas especiales</h3>
                    <ContenedorListaConPrecio childrenWithMargin={true} lista={listaHamburguesasEspeciales} />
                </ListaHamburguesasEspeciales>
                <ListaHamburguesasBasicas>
                    <h3 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Hamburgueas básicas</h3>
                    <ContenedorListaConPrecio childrenWithMargin={true} lista={listaHamburguesasBasicas} />
                </ListaHamburguesasBasicas>
            </ContainerHamburguesas>
            {/* Cual elegirias? */}
            <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <h2 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Chicken supreme</h2>
                    </div>
                    <ContenedorImagenHamburguesa>
                        <CirculoHamburguesaImagen img={hamburguesaChickenSupreme} />
                    </ContenedorImagenHamburguesa>
                </CirculoHamburguesa>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <h1 className="fontFSpecialElite" style={{ textAlign: 'center' }}>¿Cuál elegirías?</h1>
                    </div>
                    <ContenedorImagenHamburguesa >
                        <CirculoHamburguesaImagen img={hamburguesaCentro} />
                    </ContenedorImagenHamburguesa>
                </CirculoHamburguesa>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <h2 className="fontFSpecialElite" style={{ textAlign: 'center' }}>La suprema</h2>
                    </div>
                    <ContenedorImagenHamburguesa>
                        <CirculoHamburguesaImagen img={hamburguesaSupreme} />
                    </ContenedorImagenHamburguesa>
                </CirculoHamburguesa>
            </div>
            {/* De temporada */}
            <ContenedorDeTemporada>
                <ContenedorDeTemporadaDescripcion>
                    <ContenedorNegro>
                        <h1 style={{ paddingLeft: '20%', width: '100%' }}>De temporada...</h1>
                        <DescripcionTemporadaP className="fontFSpecialElite">No te pierdas las Hamburguesas 
                            <br/> que preparamos en cada festividad 
                            <br/>¡Preparadas con ingredientes o 
                            <br/> temáticas diferentes!</DescripcionTemporadaP>
                    </ContenedorNegro>
                </ContenedorDeTemporadaDescripcion>
                <ContenedorImagenDeTemporada img={imagenTemporada}>

                </ContenedorImagenDeTemporada>
            </ContenedorDeTemporada>

            <div style={{ height: '5vh' }}></div>
        </>
    )
}

export default Hamburguesas;