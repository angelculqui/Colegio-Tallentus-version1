import { Button } from '@mui/material'
import React from 'react'
import '../../estilos.css'





const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <Button onClick={()=>closeModal(false)} >X</Button>
            </div>
            
            <div className='title'>
                <h1>Quieres continuar?</h1>
            </div>
            <div className='body'>
                <p>La siguiente página es esta</p>
            </div>
            <div className='footer'>
                <Button onClick={()=>closeModal(false)} id="cancelBtn" >Cancelar</Button>
                <Button>Continuar</Button>
            </div>


        </div>
    </div>
  )
}

export default Modal

