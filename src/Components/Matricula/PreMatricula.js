import React, {useState} from 'react';
import '../../estilos.css'
import {useNavigate} from 'react-router-dom'

function PreMatricula(){

	const [inputNombresEstudiante, cambiarInputNombresEstudiante] = useState('');
	const [inputApellidosEstudiante, cambiarInputApellidosEstudiante] = useState('');
	const [inputDireccionEstudiante, cambiarInputDireccionEstudiante] = useState('');
	const [inputCorreoEstudiante, cambiarInputCorreoEstudiante] = useState('');
	const [inputDNIEstudiante, cambiarInputDNIEstudiante] = useState('');
	const [inputTelefonoEstudiante, cambiarInputTelefonoEstudiante] = useState('');
	const [inputFechaNacimientoEstudiante, cambiarInputFechaNacimientoEstudiante] = useState('');
	const [inputNivelEstudiante, cambiarInputNivelEstudiante] = useState('');
	const [inputGradoEstudiante, cambiarInputGradoEstudiante] = useState('');
	const [inputNombresApoderado, cambiarInputNombresApoderado] = useState('');
	const [inputApellidosApoderado, cambiarInputApellidosApoderado] = useState('');
	const [inputDireccionApoderado, cambiarInputDireccionApoderado] = useState('');
	const [inputCorreoApoderado, cambiarInputCorreoApoderado] = useState('');
	const [inputDNIApoderado, cambiarInputDNIApoderado] = useState('');
	const [inputTelefonoApoderado, cambiarInputTelefonoApoderado] = useState('');
	const [inputRelacionEstudiante, cambiarInputRelacionEstudiante] = useState('');
	const [inputGradoInstruccion, cambiarInputGradoInstruccion] = useState('');
	const [inputOcupacion, cambiarInputOcupacion] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Formulario Enviado!');
	}
	
	const handleInputNombresEstudiante = (e) => {
		cambiarInputNombresEstudiante(e.target.value);
	}

	const handleInputApellidosEstudiante = (e) => {
		cambiarInputApellidosEstudiante(e.target.value);
	}

	const handleInputDireccionEstudiante = (e) => {
		cambiarInputDireccionEstudiante(e.target.value);
	}

	const handleInputCorreoEstudiante = (e) => {
		cambiarInputCorreoEstudiante(e.target.value);
	}
	
	const handleInputDNIEstudiante = (e) => {
		cambiarInputDNIEstudiante(e.target.value);
	}

	const handleInputTelefonoEstudiante = (e) => {
		cambiarInputTelefonoEstudiante(e.target.value);
	}

	const handleInputFechaNacimientoEstudiante = (e) => {
		cambiarInputFechaNacimientoEstudiante(e.target.value);
	}

	const handleInputNivelEstudiante = (e) => {
		cambiarInputNivelEstudiante(e.target.value);
	}

	const handleInputGradoEstudiante = (e) => {
		cambiarInputGradoEstudiante(e.target.value);
	}

	const handleInputNombresApoderado = (e) => {
		cambiarInputNombresApoderado(e.target.value);
	}
	
	const handleInputApellidosApoderado = (e) => {
		cambiarInputApellidosApoderado(e.target.value);
	}

	const handleInputDireccionApoderado = (e) => {
		cambiarInputDireccionApoderado(e.target.value);
	}

	const handleInputCorreoApoderado = (e) => {
		cambiarInputCorreoApoderado(e.target.value);
	}

	const handleInputDNIApoderado = (e) => {
		cambiarInputDNIApoderado(e.target.value);
	}

	const handleInputTelefonoApoderado = (e) => {
		cambiarInputTelefonoApoderado(e.target.value);
	}

	const handleInputRelacionEstudiante = (e) => {
		cambiarInputRelacionEstudiante(e.target.value);
	}

	const handleInputGradoInstruccion = (e) => {
		cambiarInputGradoInstruccion(e.target.value);
	}

	const handleInputOcupacion = (e) => {
		cambiarInputOcupacion(e.target.value);
	}

    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("GenerarPago");

    };

	const handleClick1 =()=>{
        navigate("/");

    };

	return (
		<>
			<body className='body1'>
				<div className='contenedor'>
					<form action="" onSubmit={handleSubmit} className="formulario">
						<div>
							<h2 style = {{textAlign: 'center'}} >REGISTRO</h2>
							<div>
								<div className='item'>
									<h4><u>DATOS DEL ALUMNO</u></h4>
								</div>
							
								<div className='item'>
									<h4><u>DATOS DEL APODERADO</u></h4>
								</div>
							</div>
							<div className='item'>
								<div className='item' >
									<label  htmlFor="nombresEstudiante">Nombres</label>
									<input
										type="text"
										name="nombresEstudiante"
										placeholder="Nombres"
										id="nombresEstudiante"
										value={inputNombresEstudiante}
										onChange={handleInputNombresEstudiante}
									/>

								</div>

								<div  className='item'>
									<label htmlFor="ApellidosEstudiante">Apellidos</label>
									<input
										type="text"
										name="ApellidosEstudiante"
										placeholder="Apellidos"
										id="apellidosApellidosEstudiante"
										value={inputApellidosEstudiante}
										onChange={handleInputApellidosEstudiante}
									/>
								</div>

								<div>
									<label htmlFor="direccionEstudiante">Direccion</label>
									<input
										type="text"
										name="direccionEstudiante"
										placeholder="Direccion"
										id="direccionEstudiante"
										value={inputDireccionEstudiante}
										onChange={handleInputDireccionEstudiante}
									/>
								</div>

								<div>
									<label htmlFor="correoEstudiante">Correo</label>
									<input
										type="text"
										name="correoEstudiante"
										placeholder="Correo"
										id="correoEstudiante"
										value={inputCorreoEstudiante}
										onChange={handleInputCorreoEstudiante}
									/>
								</div>

								<div className='item'>
									<label htmlFor="dniEstudiante">DNI</label>
									<input
										type="text"
										name="dniEstudiante"
										maxLength="8"
										placeholder="DNI"
										id="dniEstudiante"
										value={inputDNIEstudiante}
										onChange={handleInputDNIEstudiante}
									/>
								</div>

								<div className='item'>
									<label htmlFor="telefonoEstudiante">Telefono</label>
									<input
										type="text"
										name="telefonoEstudiante"
										placeholder="Telefono"
										maxLength="9"
										id="telefonoEstudiante"
										value={inputTelefonoEstudiante}
										onChange={handleInputTelefonoEstudiante}
									/>
								</div>

								<div>
									<label htmlFor="fechaNacimientoEstudiante">Fecha de Nacimiento</label>
									<input
										type="date"
										name="fechaNacimientoEstudiante"
										placeholder="Fecha de Nacimiento"
										id="fechaNacimientoEstudiante"
										value={inputFechaNacimientoEstudiante}
										onChange={handleInputFechaNacimientoEstudiante}
									/>
								</div>

								<div className='item'>
									<label htmlFor="nivelEstudiante">Nivel</label>
									<select
										type="text"
										name="nivelEstudiante"
										placeholder="Nivel"
										id="nivelEstudiante"
										value={inputNivelEstudiante}
										onChange={handleInputNivelEstudiante}
									>
									<option value="value1">Seleccionar</option>
									<option value="value2">Primaria</option>
									<option value="value3">Secundaria</option>	
									</select>
								</div>

								<div className='item'>
									<label htmlFor="gradoEstudiante">Grado</label>
									<select
										type="text"
										name="gradoEstudiante"
										placeholder="Grado"
										id="gradoEstudiante"
										value={inputGradoEstudiante}
										onChange={handleInputGradoEstudiante}
									>
									<option value="value1">Seleccionar</option>
									<option value="value2">Primero</option>
									<option value="value3">Segundo</option>	
									<option value="value4">Tercero</option>	
									<option value="value5">Cuarto</option>	
									<option value="value6">Quinto</option>	
									</select>	
								</div>

								<div >
									<button onClick={handleClick1} type="submit">Regresar</button>
								</div>
							</div>

							<div className='item'>
								<div className='item'>
									<label htmlFor="nombresApoderado">Nombres</label>
									<input
										type="text"
										name="nombresApoderado"
										placeholder="Nombres"
										id="nombresApoderado"
										value={inputNombresApoderado}
										onChange={handleInputNombresApoderado}
									/>
								</div>

								<div className='item'>
									<label htmlFor="apellidosApoderado">Apellidos</label>
									<input
										type="text"
										name="apellidosApoderado"
										placeholder="Apellidos"
										id="apellidosApoderado"
										value={inputApellidosApoderado}
										onChange={handleInputApellidosApoderado}
										
									/>
								</div>

								<div>
									<label htmlFor="direccionApoderado">Direccion</label>
									<input
										type="text"
										name="direccionApoderado"
										placeholder="Direccion"
										id="direccionApoderado"
										value={inputDireccionApoderado}
										onChange={handleInputDireccionApoderado}
									/>
								</div>

								<div>
									<label htmlFor="correoApoderado">Correo</label>
									<input
										type="text"
										name="correoApoderado"
										placeholder="Correo"
										id="correoApoderado"
										value={inputCorreoApoderado}
										onChange={handleInputCorreoApoderado}
									/>
								</div>

								<div className='item'>
									<label htmlFor="dniApoderado">DNI</label>
									<input
										type="text"
										name="dniApoderado"
										maxLength="8"
										placeholder="DNI"
										id="dniApoderado"
										value={inputDNIApoderado}
										onChange={handleInputDNIApoderado}
									/>
								</div>

								<div className='item'>
									<label htmlFor="telefonoApoderado">Telefono</label>
									<input
										type="text"
										name="telefonoApoderado"
										maxLength="9"
										placeholder="Telefono"
										id="telefonoApoderado"
										value={inputTelefonoApoderado}
										onChange={handleInputTelefonoApoderado}
									/>
								</div>
								

								<div>
									<label className='label2' htmlFor="relacionEstudiante">Relacion con el Estudiante</label>
									<input
										type="text"
										name="relacionEstudiante"
										placeholder="Relacion con el Estudiante"
										id="relacionEstudiante"
										value={inputRelacionEstudiante}
										onChange={handleInputRelacionEstudiante}
									/>
								</div>

								<div className='item'>
									<label htmlFor="gradoInstruccion">Grado de Instruccion</label>
									<select
										type="text"
										name="gradoInstruccion"
										placeholder="Grado de Instruccion"
										id="gradoInstruccion"
										value={inputGradoInstruccion}
										onChange={handleInputGradoInstruccion}
									>
									<option value="value1">Seleccionar</option>
									<option value="value2">Primaria Completa</option>
									<option value="value3">Secuandaria Completa</option>
									<option value="value4">Bachiller</option>	
									<option value="value5">Titulado</option>
									</select>
								</div>

								<div className='item'>
									<label htmlFor="ocupacion">Ocupación</label>
									<input
										type="text"
										name="ocupacion"
										placeholder="Ocupacion"
										id="ocupacion"
										value={inputOcupacion}
										onChange={handleInputOcupacion}
									/>

								</div>

								<div >
									<button onClick={handleClick} type="submit">Continuar</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</body>
		</>
	);

}

export default PreMatricula;