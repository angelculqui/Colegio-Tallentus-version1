import React from "react";
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';

function Tablas() {
  return (
    <>
      <div class="container-xxl">
      
      <Row>
        <Col sm={6} align="center" > 
          <table  class="table table-bordered" >
            <thead class="thead-dark" align="center">
              <tr class="table-dark" >
                <th scope="col">Nivel</th>
                <th scope="col">Grado</th>
                <th scope="col">Vacantes Disponibles</th>
              </tr>
            </thead>
            <tbody align="center">
              <tr > 
                
                <td>Inicial</td>
                <td>3 años</td>
                <td>20</td>
              </tr>
              <tr>
                
                <td>Inicial</td>
                <td>4 años</td>
                <td>12</td>
              </tr>
              <tr>
                
                <td>Primaria</td>
                <td>1° grado</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </Col>
      
        <Col sm={6} align="center"> 
          <table class="table table-bordered">
            <thead class="thead-dark" align="center">
              <tr class="table-dark">
                <th scope="col">Nivel</th>
                <th scope="col">Costo</th>
                
              </tr>
            </thead>
            <tbody align="center">
              <tr>
                
                <td>Matrícula Inicial</td>
                <td>S/ 200.00</td>
                
              </tr>
              <tr>
                
                <td>Matrícula Primaria</td>
                <td>S/ 300.00</td>
                
              </tr>
              
            </tbody>
          </table>
        </Col>
      </Row>
        </div>
    </>
  );
}
export default Tablas;