import React from "react";
import {Tab, Row, Col, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../estilos.css'
import { BsPlusLg, BsFillStarFill,BsArrowLeftRight } from 'react-icons/bs';

function ReqyPasos() {
  return (
    <div class="container-xxl">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div>
            
            <Nav  className="flex-column">
                <Row >
                    <Col sm={4} align="center" >
                        <Nav.Item >
                         <Nav.Link eventKey="first" >
                            <Button bsPrefix="tab_button"> 
                             ALUMNOS NUEVOS <p></p> <BsPlusLg color="black"/> 
                            </Button>
                        </Nav.Link>
                        
                        </Nav.Item>
                    </Col>
                    <Col sm={4} align="center">
                        <Nav.Item>
                        
                         <Nav.Link eventKey="second">
                            <Button bsPrefix="tab_button">
                             ALUMNOS TRASLADO<p></p> <BsArrowLeftRight color="black"/>
                             </Button>     
                        </Nav.Link>
                        
                        </Nav.Item>
                    </Col>
                    <Col sm={4} align="center">
                        <Nav.Item>
                        <Nav.Link eventKey="third">
                            <Button bsPrefix="tab_button">
                                ALUMNOS REGULARES <p></p><BsFillStarFill color="black"/>
                            </Button>
                        </Nav.Link>
                        
                        </Nav.Item>
                    </Col>
                </Row>
            </Nav>
        </div>
        <br></br>    
        <div> 
            <Tab.Content>
                <Tab.Pane eventKey="first" >
                <Row >
                    <Col sm={6} i >
                    <dl>
                        <dt>Paso 1</dt>
                        <dd>Completar la ficha de pre-matrícula 2022.</dd>
                        <dt>Paso 2</dt>
                        <dd>
                            Documentos a solicitar:
                            <ul>
                                <li>Foto nítida por ambos lados del DNI del alumno.</li>
                                <li>Foto nítida por ambos lados del DNI del P.F. y/o apoderado.</li>
                                <li>Libreta de notas.</li>
                                <li>Cartilla de vacunación.</li>
                            </ul>
                        </dd>
                        </dl>
                    </Col>
                    <Col sm={6}  >
                        <dl>
                        <dt>Paso 3</dt>
                        <dd>
                            <ul>
                                <li>Pago de matrícula.</li>
                                <li>Firmar el compromiso de matrícula.</li>
                                
                            </ul>
                        </dd>
                        <dt>Paso 4</dt>
                        <dd>Se programa entrevista con padres y coordinación o psicóloga.</dd>
                        
                        </dl>
                    </Col>
                </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row >
                    <Col sm={6} >
                    <dl>
                        <dt>Paso 1</dt>
                        <dd>Completar la ficha de pre-matrícula 2022.</dd>
                        <dt>Paso 2</dt>
                        <dd>
                            Documentos a solicitar:
                            <ul>
                                <li>Foto nítida por ambos lados del DNI del alumno.</li>
                                <li>Foto nítida por ambos lados del DNI del P.F. y/o apoderado.</li>
                                <li>Libreta de notas.</li>
                                <li>Cartilla de vacunación.</li>
                            </ul>
                        </dd>
                        </dl>
                    </Col>
                    <Col sm={6}  >
                        <dl>
                        <dt>Paso 3</dt>
                        <dd>
                            <ul>
                                <li>Pago de matrícula.</li>
                                <li>Firmar el compromiso de matrícula.</li>
                                
                            </ul>
                        </dd>
                        <dt>Paso 4</dt>
                        <dd>Se programa entrevista con padres y coordinación o psicóloga.</dd>
                        
                        </dl>
                    </Col>
                </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row >
                    <Col sm={12}  align="center" >
                    <dl>
                        <dt>Inscripción</dt>
                        <dd>
                                
                                    <li>Actualizar ficha de matrícula 2022</li>
                                    <li>Firmar el Compromiso de matrícula 2022.</li>
                                    
                                
                        </dd>
                    </dl>
                    </Col>
                    </Row>
                </Tab.Pane>
            </Tab.Content>
            
        </div>
        </Tab.Container>
    </div>
  );
}

export default ReqyPasos;