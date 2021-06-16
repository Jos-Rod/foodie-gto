import React, { useEffect } from 'react';
import imagenBoneless from '../../imgs/boneless.jpg';
import imagenLosFavoritos from '../../imgs/losFavoritos.jpeg';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';
import { TituloSnacks, ContenedorImagen, CirculosIPad, ContenedorSalsas, CirculosDesktop, DescripcionSalsa, CirculoSalsa, ContenedorListaFavoritos, ContenedorFavoritos, ContenedorFavoritosEImagen } from './LosFavoritos.styling';
import ContenedorListaConPrecio from '../../components/ContenedorListaConPrecio/ContenedorListaConPrecio.component';
// import './auxJS';

const primeraListaBoneless = [
    { title: 'Boneless 350', precio: '$50' },
    { title: 'Tendere', precio: '$50' },
    { title: 'Nuggets (12 piezas)', precio: '$50' }
];

const listaPapasSupremas = [
    { title: <span><span style={{ color: 'red' }}>Papas SUPREMAS</span> (queso americano, queso mozarella, <br /> chorizo y arrachera</span>, precio: '$50' }
];

const listaPapasGajo = [
    { title: 'Papas gajo o francesas', precio: '$50' }
];

const LosFavoritos = () => {

    function resizeCircles() {
        const lista = document.querySelectorAll(".CirculoSalsa");
        lista.forEach(e => {
            console.log("ASF");
            e.setAttribute("style", `height:${e.clientWidth}px`);
        });
    }

    useEffect(() => {
        resizeCircles();
        function handleResize() {
            resizeCircles();
        }

        window.addEventListener('resize', handleResize);
    });

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

                    <ContenedorListaFavoritos style={{ marginTop: '25px' }}>
                        <ContenedorListaConPrecio lista={listaPapasSupremas} />
                    </ContenedorListaFavoritos>

                    <ContenedorListaFavoritos style={{ marginTop: '25px' }}>
                        <ContenedorListaConPrecio lista={listaPapasGajo} />
                    </ContenedorListaFavoritos>
                </ContenedorFavoritos>
                <ContenedorImagen img={imagenLosFavoritos} />
            </ContenedorFavoritosEImagen>

            <ContenedorSalsas>
                <h1 className="title centered">Puedes elegir la salsa de tu preferencia</h1>
                <CirculosDesktop>
                    <div style={{ width: '20%' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#D40029'>
                            <DescripcionSalsa>Buffalo</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ display: 'flex', width: '20%', height: '100%', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#E97600' >
                            <DescripcionSalsa>BB Habanero</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#BF5000'>
                            <DescripcionSalsa>BBQ Hot</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ width: '20%' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#6A2C00'>
                            <DescripcionSalsa>BBQ</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ display: 'flex', width: '20%', height: '100%', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#FFF6BF' >
                            <DescripcionSalsa>Ajo Parmesano</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#D47700'>
                            <DescripcionSalsa>Tamarindo</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ width: '20%' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#FFF63C'>
                            <DescripcionSalsa>Lemon Pepper</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>

                </CirculosDesktop>
                <CirculosIPad>
                    <div style={{ display: 'flex', width: '30%', height: '100%', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#D40029'>
                            <DescripcionSalsa>Buffalo</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#BF5000'>
                            <DescripcionSalsa>BBQ Hot</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ display: 'flex', width: '30%', height: '100%', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#E97600' >
                            <DescripcionSalsa>BB Habanero</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#FFF6BF' >
                            <DescripcionSalsa>Ajo Parmesano</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#FFF63C'>
                            <DescripcionSalsa>Lemon Pepper</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                    <div style={{ display: 'flex', width: '30%', height: '100%', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <CirculoSalsa className="CirculoSalsa" color='#6A2C00'>
                            <DescripcionSalsa>BBQ</DescripcionSalsa>
                        </CirculoSalsa>
                        <CirculoSalsa className="CirculoSalsa" color='#D47700'>
                            <DescripcionSalsa>Tamarindo</DescripcionSalsa>
                        </CirculoSalsa>
                    </div>
                </CirculosIPad>
            </ContenedorSalsas>
            <div style={{ height: '15vh' }}></div>
        </>
    )
}

export default LosFavoritos;