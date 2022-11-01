import React, {useState} from 'react';
import '../../estilos.css'
import {useNavigate} from 'react-router-dom'


function PagoOnline(){

	const [inputNumeroTarjeta, cambiarInputNumeroTarjeta] = useState('');
	const [inputNombres, cambiarInputNombres] = useState('');
	const [inputApellidos, cambiarInputApellidos] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');
	const [inputCvv, cambiarInputCvv] = useState('');
	const [inputFecha, cambiarInputFecha] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
	}

	const handleInputNumeroTarjeta = (e) => {
		cambiarInputNumeroTarjeta(e.target.value);
	}
	
	const handleInputNombres = (e) => {
		cambiarInputNombres(e.target.value);
	}

	const handleInputApellidos = (e) => {
		cambiarInputApellidos(e.target.value);
	}

	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	const handleInputCvv = (e) => {
		cambiarInputCvv(e.target.value);
	}
	
	const handleInputFecha = (e) => {
		cambiarInputFecha(e.target.value);
	}

	const [openModal,setOpenModal]=useState(false);

    const navigate = useNavigate()
    const handleClick =()=>{
		
        navigate("PagoExitoso");

    };

	return (
    <>
      <body className="body1">
        <div className="contenedor">
          <form action="" onSubmit={handleSubmit} className="formulario1">
            <h1 style={{ textAlign: "center" }}>PAGO DE MATRICULA</h1>
            <br></br>
            <div>
              <label htmlFor="NumeroTarjeta">Numero de Tarjeta</label>
              <input
                type="text"
                maxLength="16"
                name="numeroTarjeta"
                placeholder="Numero de Tarjeta"
                id="numeroTarjeta"
                value={inputNumeroTarjeta}
                onChange={handleInputNumeroTarjeta}
              />
            </div>

            <div>
              <label htmlFor="nombres">Nombres</label>
              <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                id="nombres"
                value={inputNombres}
                onChange={handleInputNombres}
              />
            </div>

            <div>
              <label htmlFor="apellidos">Apellidos</label>
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                id="apellidos"
                value={inputApellidos}
                onChange={handleInputApellidos}
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                name="correo"
                placeholder="Correo"
                id="correo"
                value={inputCorreo}
                onChange={handleInputCorreo}
              />
            </div>

            <div>
              <label htmlFor="cvv">Cvv</label>
              <input
                type="text"
                name="cvv"
                maxLength="3"
                placeholder="cvv"
                id="cvv"
                value={inputCvv}
                onChange={handleInputCvv}
              />
            </div>

            <div>
              <label htmlFor="fecha">Fecha de vencimiento</label>
              <input
                type="text"
                name="fecha"
                maxLength="6"
                placeholder="MM/AAAA"
                id="fecha"
                value={inputFecha}
                onChange={handleInputFecha}
              />
            </div>

            <button onClick={handleClick} type="submit">
              Pagar S/300.00
            </button>
          </form>
        </div>
      </body>
    </>
  );

}

export default PagoOnline;

