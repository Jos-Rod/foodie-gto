import React, { useContext } from 'react';
import imagenDesayunos from '../../imgs/desayunoCuadrado.jpg';
import imagenDesayunosPhoneSize from '../../imgs/desayunosYAlmuerzos.jpg';
import imagenTorta from '../../imgs/torta.jpg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import {TablaDesayunos, TablaTorta, DetalleTorta, H1Desayuno, ImagenDesayunoPhoneSize, ContenedorImagenChild, ContainerListaDesayunosParent, H1DesayunoPhoneSize, PDesayunos, ContenedorNegro, DescripcionTortaPrecio, ContenedorTortasLista, ContenedorDetalleTortas, DetalleAlmuerzos, ContenedorImagenTorta, ContainerDesayunosLista, DescripcionDesayunoPrecio, CuadroBlanco, DescripcionDesayuno, ContenedorImagen, TituloDesayuno, ImagenDesayuno } from './Desayunos.styling';

const desayunosAlmuerzosLabel = [
    { title: 'Cuatro hotcakes con maple', precio: '$45' },
    { title: 'Cuatro hotcakes con fruta', precio: '$60' },
    { title: <span><span style={{ color: 'purple' }}>Básico</span> (2 huevos, 2 hotcakes y <br /> tocino)</span>, precio: '$50' },
    { title: <span><span style={{ color: 'green' }}>Americano</span> (2 huevos, tocino, <br /> papa rallada)</span>, precio: '$65' },
    { title: <span><span style={{ color: 'red' }}>Completo</span> (2 huevos, frijoles, pan, <br /> una proteína (arrachera, prensado <br /> o chorizo))</span>, precio: '$70' },
    { title: 'Hot cake por piezas', precio: '$17' },
]

const tortasLabels = [
    { title: 'Milanesa de Pollo', precio: '$50' },
    { title: 'Chorizo', precio: '$50' },
    { title: 'Choriqueso', precio: '$50' },
    { title: 'Arrachera', precio: '$50' },
    { title: 'Salchicha', precio: '$50' },
];


const Desayunos = () => {

    const {cremaColor} = useContext(ThemeContext);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <H1Desayuno className="title">¿Ya tienes que desayunar?</H1Desayuno>
                <H1DesayunoPhoneSize>¿Ya tienes <br /> que desayunar?</H1DesayunoPhoneSize>
            </div>
            <DetalleAlmuerzos color={cremaColor}>
                <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                    <DescripcionDesayuno>
                        <TituloDesayuno>Desayunos y almuerzos</TituloDesayuno>
                        <p className="fontFSpecialElite" style={{marginTop: '0px'}}>DISPONIBLE DESDE LAS 9 AM</p>
                        <CuadroBlanco>
                            <ContainerListaDesayunosParent>
                                <PDesayunos className="fontFSpecialElite" style={{ textAlign: 'left', marginLeft: '5%', marginTop: '10%' }}>Desayunos</PDesayunos>
                                <ContainerDesayunosLista>
                                    {
                                        desayunosAlmuerzosLabel.map(e => {
                                            return (
                                                <TablaDesayunos>
                                                    <DescripcionDesayunoPrecio className="fontFSpecialElite">{e.title}</DescripcionDesayunoPrecio>
                                                    <DescripcionDesayunoPrecio className="fontFSpecialElite">{e.precio}</DescripcionDesayunoPrecio>
                                                </TablaDesayunos>
                                            )
                                        })
                                    }
                                </ContainerDesayunosLista>
                            </ContainerListaDesayunosParent>
                        </CuadroBlanco>
                    </DescripcionDesayuno>
                    <ContenedorImagen>
                        <ContenedorImagenChild>
                            <ImagenDesayuno img={imagenDesayunos} />
                            <ImagenDesayunoPhoneSize img={imagenDesayunosPhoneSize} />
                        </ContenedorImagenChild>
                    </ContenedorImagen>

                </div>
            </DetalleAlmuerzos>
            <div style={{ height: '100px' }}></div>
            <DetalleTorta>
                <ContenedorImagenTorta img={imagenTorta}></ContenedorImagenTorta>
                <ContenedorDetalleTortas>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 className="title" style={{ textAlign: 'center' }}>¡Qué tortas!</h1>
                        <ContenedorNegro>
                            <ContenedorTortasLista style={{ textAlign: 'center', color: 'white' }}>
                                {
                                    tortasLabels.map(e => {
                                        return (
                                            <TablaTorta>
                                                <DescripcionTortaPrecio className="fontFSpecialElite">{e.title}</DescripcionTortaPrecio>
                                                <DescripcionTortaPrecio className="fontFSpecialElite">{e.precio}</DescripcionTortaPrecio>
                                            </TablaTorta>
                                        )
                                    })
                                }
                                <DescripcionTortaPrecio style={{ marginTop: '25px' }} className="fontFSpecialElite">Todas incluyen: mayonesa, aderezo <br /> picoso, lechuga, jitomate y aguacate</DescripcionTortaPrecio>
                            </ContenedorTortasLista>

                        </ContenedorNegro>
                    </div>
                </ContenedorDetalleTortas>
            </DetalleTorta> 
        </>
    )
}

export default Desayunos;