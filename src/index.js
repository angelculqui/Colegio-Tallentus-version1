import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AccesoAulaVirtual from './AccesoAulaVirtual/AccesoAulaVirtual'
import PagoExitoso from './Components/Matricula/PagoExitoso';
import PreMatricula from './Components/Matricula/PreMatricula'
import PagoOnline from './Components/Matricula/PagoOnline'
import GenerarPago from './Components/Matricula/GenerarPago';

ReactDOM.render(
  <Router>
    <CssBaseline/>
      <Routes>
          <Route path="/" exact element={<App/>} />
          <Route path="AccesoAulaVirtual" exact element={<AccesoAulaVirtual/>} />
          <Route path="PreMatricula" element={<PreMatricula/>}/>
          <Route path="PreMatricula/GenerarPago" element={<GenerarPago/>}/>
          <Route path="PreMatricula/GenerarPago/PagoOnline" element={<PagoOnline/>}/>
          <Route path="PreMatricula/GenerarPago/PagoOnline/PagoExitoso" element={<PagoExitoso/>}/>
        </Routes>
  </Router>,
  document.getElementById('root')
);


