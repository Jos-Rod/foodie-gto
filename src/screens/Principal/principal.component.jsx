import React from 'react';
import logo from '../../imgs/logo.png';
import desayunosYAlmuerzos from '../../imgs/desayunosYAlmuerzos.jpg';
import bebidas from '../../imgs/bebidas.jpg';
import especiales from '../../imgs/especiales.jpg';
import hamburguesas from '../../imgs/hamburguesas.jpeg';
import losFavoritos from '../../imgs/losFavoritos.jpeg';
import CirculoComida from '../../components/CirculoComida/CirculoComida.component';
import imgPasta from '../../imgs/especialesSemana/pasta.jpg';
import imgAlitas from '../../imgs/especialesSemana/alitas.jpeg';
import imgCeviche from '../../imgs/especialesSemana/ceviche.jpg';
import imgTostada from '../../imgs/especialesSemana/tostada.jpg';
import { CicrulosComidasListStyled, ImagenEspecialSemana } from './principal.styling';

function Principal() {

    const listaComidaCirculos = [
        { title: 'Desayunos y almuerzos', img: desayunosYAlmuerzos },
        { title: 'Hamburguesas', img: hamburguesas },
        { title: 'Especiales', img: especiales },
        { title: 'Los favoritos', img: losFavoritos },
        { title: 'Bebidas', img: bebidas },
    ];

    const imagenesEspecialesDeLaSemana = [imgPasta, imgCeviche, imgTostada, imgAlitas];

    return (
        <div>
            {/* Seccion principal */}
            <section title="principal">
                <div>

                    {/* <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <img src={logo} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    </div> */}
                    <div style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: '60%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%', height: '70vh', position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', left: '5%' }}>
                            <h1 className="title" style={{ marginBottom: '0px' }}>¡Bienvenido a FoodieGto!</h1>
                        </div>
                        <h1 className="title" style={{ position: 'absolute', bottom: '4px', right: '5%' }}>¿Qué tipo de antojo tienes hoy?</h1>
                    </div>
                </div>
            </section>
            {/* Seccion de encuentra lo que necesites */}
            <section title="Encuentra lo que necesites" style={{ marginTop: '60px' }}>
                <div >
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '25pt' }}>Encuentra lo que necesites</h1>
                    </div>
                    <CicrulosComidasListStyled >
                        {
                            listaComidaCirculos.map(e => {
                                return <CirculoComida title={e.title} img={e.img}></CirculoComida>
                            })
                        }
                    </CicrulosComidasListStyled>
                </div>
            </section>
            {/* Seccion de Pregunta por los especiales de la semana */}
            <section title="Pregunta por los especiales de la semana" style={{ marginTop: '60px' }}>
                <div >
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '25pt' }}>Pregunta por los especiales de la semana</h1>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {
                            imagenesEspecialesDeLaSemana.map(img => {
                                return (
                                    <ImagenEspecialSemana img={img} >
                                        a
                                    </ImagenEspecialSemana>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Principal;