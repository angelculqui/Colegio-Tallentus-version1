import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';


const Data = [
    {
      question: '¿Cuál es nuestra propuesta educativa?',
      answer: "Nuestra propuesta ha sido desarrollada por una plana docente especializada en diversas materias, que a su vez controla el proceso de aprendizaje mediante evaluaciones permanentes. Asimismo, cuenta con un programa de valores que complementa la formación integral del alumno, gracias al apoyo de un equipo de tutoras.",
    },
    {
      question: 'Trámite para solicitar constancia de Tercio Superior',
      answer:   "Este dato figura en la parte inferior de la libreta de notas. Si el padre de familia desea solicitar una constancia de Tercio Superior, deberá enviar una solicitud a través de un correo electrónico al área de Caja: cajatallentus@gmail.com. Puede llamar al 6198100 para más información.",
                
    },
    {
      question: '¿Qué edad deben tener los niños que se matriculen en 1er grado de primaria?',
      answer:  'Los niños que van a matricularse en 1er grado de primaria deben cumplir 6 años, como máximo, el 30 de marzo.',
    },
    {
        question: '¿Ofrece Tallentus algún usuario para el Padre de Familia?',
        answer:  'Nuestra plataforma te ofrece un usuario para padres de familia que te brinda toda la información referente al proceso académico de tu hijo y también te mantiene en comunicación constante.',
    },
    {
        question: '¿Un alumno de primer grado de primaria puede aprender virtualmente?',
        answer:  'Sí, nuestros estudiantes de primer grado aprenden de manera virtual. Para ello contamos con una metodología lúdica y con seguimiento pormenorizado. Nuestros niños tienen asesorías personalizadas, trabajo colaborativo, proyectos integradores y plataformas gamificadas que lo impulsan a mejorar sus habilidades sociales y competencias académicas.',
    }
  ];

//Marco de la pantalla (heigh:100vh)
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
  
  
  
`;
//Acordeón
const Container = styled.div`
  width: auto;
  
`;
//Cabecera
const Wrap = styled.div`
  background: #4682B4;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  
  border-bottom: 1px solid #4682B4;
  
  h1 {
    padding: 1rem;
    font-size: 1rem;
    margin-left: 1rem;
    font-weight: bold;
  }
  span {
    margin-right: 2.5rem;
  }
`;

const Dropdown = styled.div`
  background: none;
  border-bottom: 1px solid #4682B4;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:stretch;
  padding: 2%;
  color: #616A6B ;
  font-size: 1rem;
  
  
  }
`;

const FAQ = () => {
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
        
       <IconContext.Provider value={{ color: '#4682B4', size: '15px'}}>
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
        
    </>
  );
};
export default FAQ;