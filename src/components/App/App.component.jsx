import React, { useContext, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import Principal from '../../screens/Principal/principal.component';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';
import Bebidas from '../../screens/Bebidas/Bebidas.component';
import Menu from '../../screens/Menu/Menu.component';
import AcercaDe from '../../screens/AcercaDe';
import LosFavoritos from '../../screens/LosFavoritos/LosFavoritos.component';
import Contacto from '../../screens/Contacto/Contacto.component';

var titlesAndLinks = [
  { title: "Home", linkTo: "/", isSelected: true }, 
  { title: "Menú diario", linkTo: "/menu", isSelected: false }, 
  { title: "Los favoritos", linkTo: "/favoritos", isSelected: false }, 
  { title: "Bebidas", linkTo: "/bebidas", isSelected: false }, 
  { title: "Acerca de Foodie", linkTo: "/acercade", isSelected: false }, 
  { title: "Contacto",linkTo: "/contacto", isSelected: false }
];

function App() {

  const currentTheme = themes;

  const [titles, setTitles] = useState(titlesAndLinks);

  function changeTitle(val) {
    const titlesAux = [...titles];
    titlesAux.forEach(e => {
      e.isSelected = false;
      if (val === e.linkTo) {
        e.isSelected = true;
      }
    });
    setTitles(titlesAux);
  }

  return (
    <HashRouter>
      <ThemeContext.Provider value={currentTheme} >
        <Navbar titlesAndLinks={titles} changeTitle={changeTitle} />
        <Switch>
          <Route exact path="/">
            <div style={{ position: 'relative' }}>
              <Principal changeTitle={changeTitle} />
              <Footer />
            </div>
          </Route>
          <Route exact path="/menu">
            <div style={{ position: 'relative' }}>
              <Menu />
              <Footer />
            </div>
          </Route>
          <Route exact path="/favoritos">
            <div style={{ position: 'relative' }}>
              <LosFavoritos />
              <Footer />
            </div>
          </Route>
          <Route exact path="/bebidas">
            <div style={{ position: 'relative' }}>
              <Bebidas />
              <Footer />
            </div>
          </Route>
          <Route exact path="/acercade">
            <div style={{ position: 'relative' }}>
              <AcercaDe />
              <Footer />
            </div>
          </Route>
          <Route exact path="/contacto">
            <div style={{ position: 'relative' }}>
              <Contacto />
              <Footer />
            </div>
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </HashRouter>
  );
}

export default App;
