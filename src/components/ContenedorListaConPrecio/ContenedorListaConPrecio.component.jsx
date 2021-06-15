import React from 'react';
import {ContenedorListaConPrecioParent, RowListaConPrecio, ElementoListaConPrecio} from './ContenedorListaConPrecio.styling';

const ContenedorListaConPrecio = ({lista}) => {
    return (
        <>
            <ContenedorListaConPrecioParent>
                {lista.map(e => {
                    return (
                        <RowListaConPrecio>
                            <ElementoListaConPrecio className="fontFSpecialElite" style={{textAlign: 'left'}}>{e.title}</ElementoListaConPrecio>
                            <ElementoListaConPrecio className="fontFSpecialElite" style={{textAlign: 'right'}}>{e.precio}</ElementoListaConPrecio>
                        </RowListaConPrecio>
                    )
                })}
            </ContenedorListaConPrecioParent>
        </>
    )
}

export default ContenedorListaConPrecio;