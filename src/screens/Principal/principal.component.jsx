import React from 'react';
import logo from '../../imgs/logo.png';
import portada from '../../imgs/portada.jpeg';
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
import { CicrulosComidasListStyled, ContainerPrincipalBienvenido, H1TipoAntojoiPhoneSize, H1TipoAntojo, ContenedorTituloBienvenido, ImagenEspecialSemana, ImagenEspecialSemanaList, ImagenLogoCentro, ImagenPortada } from './principal.styling';
import Footer from '../../components/Footer/Footer.component';

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
                <ContainerPrincipalBienvenido>
                    <ImagenPortada img={portada}>
                        <ImagenLogoCentro img={logo}>
                        </ImagenLogoCentro>
                        <ContenedorTituloBienvenido >
                            <h1 className="title" style={{ marginBottom: '0px' }}>¡Bienvenido a FoodieGto!</h1>
                        </ContenedorTituloBienvenido>
                        {/* <h1TipoAntojo className="title">¿Qué tipo de antojo tienes hoy?</h1TipoAntojo> */}
                        <H1TipoAntojo className="title">¿Qué tipo de antojo tienes hoy?</H1TipoAntojo>
                        <H1TipoAntojoiPhoneSize className="title">¿Qué tipo de antojo <br /> tienes hoy?</H1TipoAntojoiPhoneSize>
                    </ImagenPortada>
                </ContainerPrincipalBienvenido>
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
                                return e.title != "Especiales" ? <CirculoComida title={e.title} img={e.img}></CirculoComida> : <> <br/> <CirculoComida title={e.title} img={e.img}></CirculoComida> </>
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
                    <ImagenEspecialSemanaList>
                        {
                            imagenesEspecialesDeLaSemana.map(img => {
                                return (
                                    <ImagenEspecialSemana img={img} />
                                )
                            })
                        }

                    </ImagenEspecialSemanaList>
                </div>
            </section>
        </div>
    );
}

export default Principal;