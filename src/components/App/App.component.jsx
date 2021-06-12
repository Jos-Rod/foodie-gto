import React, { useContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import Principal from '../../screens/Principal/principal.component';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';

function App() {

  const currentTheme = themes;

  return (
    <HashRouter>
      <ThemeContext.Provider value={ currentTheme } >
        <Switch>
          <Route  exact path="/">
            <Navbar />
            <Principal />
            <Footer />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </HashRouter>
  );
}

export default App;
