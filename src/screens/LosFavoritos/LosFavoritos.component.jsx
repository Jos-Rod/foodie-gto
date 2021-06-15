import React from 'react';
import imagenBoneless from '../../imgs/boneless.jpg';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';
import { TituloSnacks, ContenedorImagen, ContenedorListaFavoritos, ContenedorFavoritos, ContenedorFavoritosEImagen } from './LosFavoritos.styling';
import ContenedorListaConPrecio from '../../components/ContenedorListaConPrecio/ContenedorListaConPrecio.component';

const primeraListaBoneless = [
    { title: 'Boneless 350', precio: '$50' },
    { title: 'Tendere', precio: '$50' },
    { title: 'Nuggets (12 piezas)', precio: '$50' }
];



const LosFavoritos = () => {
    return (
        <>
            <ImagenPortadaPaginas img={imagenBoneless} title='Boneless' centered={false} />
            <div>
                <TituloSnacks className="title" style={{ textAlign: 'center' }}>¿Te gustan los snacks?</TituloSnacks>
            </div>
            <ContenedorFavoritosEImagen>
                <ContenedorFavoritos>
                    <h1 className="title" style={{ textAlign: 'center' }}>Los favoritos</h1>
                    <ContenedorListaFavoritos>
                        <ContenedorListaConPrecio lista={primeraListaBoneless} />
                    </ContenedorListaFavoritos>
                </ContenedorFavoritos>
                <ContenedorImagen>d</ContenedorImagen>
            </ContenedorFavoritosEImagen>

            <div style={{ height: '20vh' }}></div>
        </>
    )
}

export default LosFavoritos;