import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../estilos.css'
import { Button } from '@mui/material';


//Marco de la pantalla (heigh:100vh)
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  
`;
//Acordeón
const Container = styled.div`
  width: 80%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
//Cabecera
const Wrap = styled.div`
  background: #0d47a1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 5px solid #fff;
  
  h1 {
    padding: 1rem;
    font-size: 1.1rem;
    margin-left: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: none;
  
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:stretch;
  padding: 2%;
   
  p {
    font-size: 2rem;
  }
  
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //cierre automático
      return setClicked(null);
    }

    setClicked(index);
  };

 

  return (
    <>
    
        
                
        <div class="header" >
        
            <div id='Information' class="header2">
                <h1>INFORMACIÓN DE MATRÍCULA TALLENTUS</h1>
                <h2>Resuelve todas tus dudas</h2>
                
            </div>
            
            
        </div>
        

        <br></br>
        <br></br>
        <div>
        <IconContext.Provider value={{ color: '#fff ', size: '25px' }}>
          <AccordionSection>
            <Container>
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index ? (
                      
                      <Dropdown>
                        <>{item.answer}</>
                                        
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
        </IconContext.Provider>
        </div>
        <br></br>
        <br></br>
        <div align="center">

            <Button href='/PreMatricula' sx=
            {{marginLeft:'160px',
            right:'100px',
            backgroundColor:"#e53935",
            fontSize:"1.2rem",
            boxSizing: 'border-box', 
            color:"white",
            '&:hover': {
              backgroundColor: '#ef5350',
              borderColor: '#cc0041',
              boxShadow: 'none',
              color:"white",
            }, }} variant='contained' >Iniciar Matrícula</Button>{' '}
        </div>
        <br></br>
        <br></br>
    </>
  );
};

export default Accordion;