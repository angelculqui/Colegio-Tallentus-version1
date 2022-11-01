import '../../estilos.css'
import {useNavigate} from 'react-router-dom'

function PagoExitoso(){


    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("/");

    };

    const handleClick4 =()=>{
        navigate("/");

    };

    return (
      <body className="body1">
        <div className="contenedor1">
          <div className="formulario2">
            <center>
              <h1>Pago de matricula</h1>

              <img
                src="http://mafle.com/wp-content/uploads/2020/02/pago.png"
                alt="imagen de logo"
              />
              <h2>El pago se ha realizado con exito</h2>

              <button onClick={handleClick4} type="submit">
                Imprimir boleta
              </button>
              <br></br>
              <button onClick={handleClick} type="submit">
                Continuar
              </button>
            </center>
          </div>
        </div>
      </body>
    );
}

export default PagoExitoso;