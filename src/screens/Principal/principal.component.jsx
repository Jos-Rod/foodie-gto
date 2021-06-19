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
import { CicrulosComidasListStyled, ContainerPrincipalBienvenido, ContainerLoQueNecesites, H1TipoAntojoiPhoneSize, H1EncuentraLoQue, H1TipoAntojo, ContenedorTituloBienvenido, ImagenEspecialSemana, ImagenEspecialSemanaList, ImagenLogoCentro, ImagenPortada } from './principal.styling';
import Footer from '../../components/Footer/Footer.component';
import { Link } from 'react-router-dom';

function Principal({ changeTitle }) {

    const listaComidaCirculos = [
        { title: 'Desayunos y almuerzos', img: desayunosYAlmuerzos, linkTo: '/menu' },
        { title: 'Hamburguesas', img: hamburguesas, linkTo: '/menu' },
        { title: 'Especiales', img: especiales, linkTo: '/menu' },
        { title: 'Los favoritos', img: losFavoritos, linkTo: '/favoritos' },
        { title: 'Bebidas', img: bebidas, linkTo: '/bebidas' },
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
            <ContainerLoQueNecesites title="Encuentra lo que necesites">
                <div >
                    <div style={{ textAlign: 'center' }}>
                        <H1EncuentraLoQue >Encuentra lo que necesites</H1EncuentraLoQue>
                    </div>
                    <CicrulosComidasListStyled >
                        {
                            listaComidaCirculos.map(e => {
                                return <Link to={e.linkTo} key={e.linkTo} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => changeTitle(e.linkTo)}><CirculoComida title={e.title} img={e.img}></CirculoComida></Link>
                                // return e.title != "Especiales" ? <CirculoComida title={e.title} img={e.img}></CirculoComida> : <> <br/> <CirculoComida title={e.title} img={e.img}></CirculoComida> </>
                            })
                        }
                    </CicrulosComidasListStyled>
                </div>
            </ContainerLoQueNecesites>
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