import React from 'react';
import logo from '../../imgs/logo.png';

function Principal() {
    return (
        <div>
            {/* Seccion principal */}
            <section title="principal">
                <div>
                    <div style={{ marginLeft: '5%' }}>
                        <h1 style={{ marginBottom: '0px'}}>¡Bienvenido a FoodieGto!</h1>
                    </div>
                    {/* <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <img src={logo} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    </div> */}
                    <div style={{ 
                        backgroundImage: `url(${logo})`, 
                        backgroundSize: '60%', 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%', height:'70vh', position: 'relative' }}>
                        <h1 style={{position: 'absolute', bottom: '4px', right: 'px'}}>¿Qué tipo de antojo tienes hoy?</h1>
                    </div>
                </div>
            </section>
            {/* Seccion de encuentra lo que necesites */}
            <section>

            </section>
        </div>
    );
}

export default Principal;