import React from 'react';
import imagenFondoDesayuno from '../../imgs/bread.jpg';
import imagenFondoHamburguesas from '../../imgs/hamburguesas.jpeg';
import Desayunos from '../../components/Desayunos';
import ImagenPortadaPaginas from '../../components/ImagenPortadaPaginas/ImagenPortadaPaginas.component';
import Hamburguesas from '../../components/Hamburguesas/Hamburguesas.component';

const Menu = () => {
    return (
        <>
            <ImagenPortadaPaginas img={imagenFondoDesayuno}></ImagenPortadaPaginas>
            <Desayunos></Desayunos>
            <ImagenPortadaPaginas img={imagenFondoHamburguesas} title={'Hamburguesas'}/>
            <Hamburguesas></Hamburguesas>
        </>
    );
}

export default Menu;