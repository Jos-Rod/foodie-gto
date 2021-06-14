import React, { useContext } from 'react';
import imagenPortada from '../../imgs/bread.jpg';
import imagenDesayunos from '../../imgs/desayunoCuadrado.jpg';
import imagenTorta from '../../imgs/torta.jpg';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ImagenPortadaStyled, TablaDesayunos, TablaTorta, DetalleTorta, DescripcionTortaPrecio, ContenedorTortasLista, ContenedorDetalleTortas, DetalleAlmuerzos, ContenedorImagenTorta, ContainerDesayunosLista, DescripcionDesayunoPrecio, CuadroBlanco, DescripcionDesayuno, ContenedorImagen, TituloDesayuno, ImagenDesayuno } from './ImagenPortadaPaginas.styling';


const desayunosAlmuerzosLabel = [
    { title: 'Cuatro hotcakes con maple', precio: '$45' },
    { title: 'Cuatro hotcakes con fruta', precio: '$60' },
    { title: <span><span style={{ color: 'purple' }}>Básico</span> (2 huevos, 2 hotcakes y tocino)</span>, precio: '$50' },
    { title: <span><span style={{ color: 'green' }}>Americano</span> (2 huevos, tocino, papa rallada)</span>, precio: '$65' },
    { title: <span><span style={{ color: 'red' }}>Completo</span> (2 huevos, frijoles, pan, una proteína (arrachera, prensado o chorizo))</span>, precio: '$70' },
    { title: 'Hot cake por piezas', precio: '$17' },
]

const tortasLabels = [
    { title: 'Milanesa de Pollo', precio: '$50' },
    { title: 'Chorizo', precio: '$50' },
    { title: 'Choriqueso', precio: '$50' },
    { title: 'Arrachera', precio: '$50' },
    { title: 'Salchicha', precio: '$50' },
];

const ImagenPortadaPaginas = () => {

    const { cremaColor } = useContext(ThemeContext);

    return (
        <>
            <ImagenPortadaStyled img={imagenPortada}>

            </ImagenPortadaStyled>
            <div style={{ textAlign: 'center' }}>
                <h1 className="title">¿Ya tienes que desayunar?</h1>
            </div>
            <DetalleAlmuerzos color={cremaColor}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <DescripcionDesayuno>
                        <TituloDesayuno>Desayunos y almuerzos</TituloDesayuno>
                        <p className="fontFSpecialElite">DISPONIBLE DESDE LAS 9 AM</p>
                        <CuadroBlanco>
                            <div style={{
                                paddingLeft: '20px',
                                width: '70%',
                                height: '100%'
                            }}>
                                <p className="fontFSpecialElite" style={{ textAlign: 'left' }}>Desayunos</p>
                                <ContainerDesayunosLista style={{ textAlign: 'left', marginLeft: '40px', position: 'absolute', top: '60px', bottom: '' }}>
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
                            </div>
                        </CuadroBlanco>
                    </DescripcionDesayuno>
                    <ContenedorImagen>
                        <ImagenDesayuno img={imagenDesayunos} />
                    </ContenedorImagen>

                </div>
            </DetalleAlmuerzos>
            <div style={{ height: '100px' }}></div>
            <DetalleTorta>
                <ContenedorImagenTorta img={imagenTorta}></ContenedorImagenTorta>
                <ContenedorDetalleTortas>
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 className="title" style={{ textAlign: 'center' }}>¡Qué tortas!</h1>
                        <div style={{ backgroundColor: 'black', paddingRight: '20%', paddingLeft: '20%', paddingTop: '15%', paddingBottom: '15%' }}>
                            <ContenedorTortasLista style={{ textAlign: 'center', color: 'white'}}>
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
                                <DescripcionTortaPrecio style={{marginTop: '25px'}} className="fontFSpecialElite">Todas incluyen: mayonesa, aderezo <br/> picoso, lechuga, jitomate y aguacate</DescripcionTortaPrecio>
                            </ContenedorTortasLista>
                            
                        </div>
                    </div>
                </ContenedorDetalleTortas>
            </DetalleTorta>
        </>
    );
};

export default ImagenPortadaPaginas;