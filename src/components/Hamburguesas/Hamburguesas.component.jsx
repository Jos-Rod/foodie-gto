import React from 'react';
import { ListaHamburguesasEspeciales, ListaHamburguesasBasicas, CirculoHamburguesa, CirculoHamburguesaImagen } from './Hamburguesas.styling';
import ContenedorListaConPrecio from '../ContenedorListaConPrecio/ContenedorListaConPrecio.component';
import hamburguesaCentro from '../../imgs/hamburguesaCentro.jpeg';
import hamburguesaChickenSupreme from '../../imgs/hamburguesaChickenSupreme.jpeg';
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
            <div style={{ display: 'flex', height: '30vh', marginTop: '30px' }}>
                <ListaHamburguesasEspeciales >
                    <h3 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Hamburgueas especiales</h3>
                    <ContenedorListaConPrecio lista={listaHamburguesasEspeciales} />
                </ListaHamburguesasEspeciales>
                <ListaHamburguesasBasicas>
                    <h3 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Hamburgueas básicas</h3>
                    <ContenedorListaConPrecio lista={listaHamburguesasBasicas} />
                </ListaHamburguesasBasicas>
            </div>
            {/* Cual elegirias? */}
            <div style={{ backgroundColor: 'beige', height: '30vh', marginTop: '150px', display: 'flex', justifyContent: 'center' }}>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <h2 className="fontFSpecialElite" style={{ textAlign: 'center' }}>Chicken supreme</h2>
                    </div>
                    <div style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <CirculoHamburguesaImagen img={hamburguesaChickenSupreme} />
                    </div>
                </CirculoHamburguesa>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <h1 className="fontFSpecialElite" style={{ textAlign: 'center' }}>¿Cuál elegirías?</h1>
                    </div>
                    <div style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <CirculoHamburguesaImagen img={hamburguesaCentro} />
                    </div>
                </CirculoHamburguesa>
                <CirculoHamburguesa>
                    <div style={{ height: '10vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <h2 className="fontFSpecialElite" style={{ textAlign: 'center' }}>La suprema</h2>
                    </div>
                    <div style={{ width: '65%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <CirculoHamburguesaImagen img={hamburguesaSupreme} />
                    </div>
                </CirculoHamburguesa>
            </div>
            <div style={{ height: '20vh' }}>d</div>
        </>
    )
}

export default Hamburguesas;