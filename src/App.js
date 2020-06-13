import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Stepper from './components/Stepper';

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
              <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/buscarBebida" component={Formulario} />
                    <Route exact path="/stepper" component={Stepper} />
                </Switch>
              </Router>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
  );
}

export default App;
