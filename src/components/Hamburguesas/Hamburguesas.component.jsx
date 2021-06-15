import React from 'react';
import { ListaHamburguesasEspeciales, ListaHamburguesasBasicas } from './Hamburguesas.styling';
import ContenedorListaConPrecio from '../ContenedorListaConPrecio/ContenedorListaConPrecio.component';

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
            <div style={{ height: '20vh' }}>d</div>
        </>
    )
}

export default Hamburguesas;