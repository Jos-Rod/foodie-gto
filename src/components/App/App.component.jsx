import React, { useContext, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import Principal from '../../screens/Principal/principal.component';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';
import Menu from '../../screens/Menu/Menu.component';

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

  return (
    <HashRouter>
      <ThemeContext.Provider value={currentTheme} >
        <Navbar titlesAndLinks={titlesAndLinks} />
        <Switch>
          <Route exact path="/">
            <div style={{ position: 'relative' }}>
              <Principal />
              <Footer />
            </div>
          </Route>
          <Route exact path="/menu">
            <div style={{ position: 'relative' }}>
              <Menu />
              <Footer />
            </div>
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </HashRouter>
  );
}

export default App;
