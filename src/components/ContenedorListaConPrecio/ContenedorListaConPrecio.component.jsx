import React from 'react';
import {ContenedorListaConPrecioParent, RowListaConPrecio, ElementoListaConPrecio} from './ContenedorListaConPrecio.styling';

const ContenedorListaConPrecio = ({lista, childrenWithMargin = false}) => {
    return (
        <>
            <ContenedorListaConPrecioParent>
                {lista.map(e => {
                    return (
                        <RowListaConPrecio>
                            <ElementoListaConPrecio childrenWithMargin={childrenWithMargin} className="fontFSpecialElite" style={{textAlign: 'left'}}>{e.title}</ElementoListaConPrecio>
                            <ElementoListaConPrecio childrenWithMargin={childrenWithMargin} className="fontFSpecialElite" style={{textAlign: 'right'}}>{e.precio}</ElementoListaConPrecio>
                        </RowListaConPrecio>
                    )
                })}
            </ContenedorListaConPrecioParent>
        </>
    )
}

export default ContenedorListaConPrecio;