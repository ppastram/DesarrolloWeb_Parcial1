import React from 'react';
import foto from './foto.png';
import './App.css';

import Button from 'react-bootstrap/Button';

import {Login} from './components/Login';
import {Listado} from './components/Listado';
import {Detalle} from './components/Detalle';
import {Navigation} from './components/Navigation';
import {Error} from './components/Error';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

        <h3 className="m-3 d-flex justify-contnet-center">
          El aroma mágico
        </h3>

        <img src={foto} className="App-foto" alt="foto café" />

      <header className="App-header">
        
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/listado" Component={Listado} />
          <Route path="/detalle" Component={Detalle} />
          <Route path="/error" Component={Error} />
        </Routes>

      </header>

      <h5 className="m-5 d-flex justify-contnet-center">
          Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
      </h5>

    </BrowserRouter>
  );
}

export default App;
