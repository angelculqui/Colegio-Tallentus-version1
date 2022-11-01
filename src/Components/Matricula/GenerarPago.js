import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'   
import {useNavigate} from 'react-router-dom'
import React from 'react'
import TablasGenerarPago from './TablasGenerarPago'
import intranet from '../images/intranet.jpg'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles (theme =>({
    root:{
        backgroundImage: `url(${intranet})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },

    menuButton: {
        marginRight: theme.spacing(0),
        fontSize:"0.7rem",
        boxSizing: 'border-box',
        border: 'solid #1E2541 0.5px',
        borderColor: 'white',
        marginTop: theme.spacing(0.01),
        marginLeft:'-250px',
        '&:hover': {
          backgroundColor: '#5c6bc0',
          borderColor: 'white',
          boxShadow: 'none',
          color:"white",
        },
        
      },
  
  }))


const GenerarPago = () => {


    const navigate = useNavigate()
    const handleClick3 =()=>{
        navigate("PagoOnline");

    };

    const classes = useStyles();

  return (
    <body className={classes.root}>
        <div className="contenedor2">
            <div className="formulario3">
                <center>
                    <Box sx={{ marginTop: "-20px" }}>
                        <h1>Generación de Orden de Pago</h1>
                    </Box>

                    <Box sx={{ marginTop: "20px" }}>
                        <Box
                            sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            padding: "15px 0px",
                            }}
                            component="div"
                            >
                            {/* Nombres */}
                            <Box sx={{ textAlign: "left" }}>
                                <Typography variant="body2">
                                    Nombre del Apoderado: Juan Ignacio Fernandez Ramirez
                                </Typography>
                                <Typography variant="body2">
                                    Nombre del alumno: Samuel Fernando Pérez Cruz
                                </Typography>
                            </Box>

                            {/* Dni */}

                            <Box>
                                <Typography variant="body2">DNI: 74185296</Typography>
                                <Typography variant="body2">DNI: 74137600</Typography>
                            </Box>

                            <Box>
                                <Typography>
                                    <Link>Detalles</Link>
                                </Typography>
                                <Typography>
                                    <Link>Detalles</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: "10px" }}>
                        <TablasGenerarPago />
                    </Box>

                    <Box sx={{ marginTop: "50px" }}>
                        <Button
                            href="/PreMatricula/GenerarPago/PagoOnline"
                            className={classes.menuButton}
                            variant="contained"
                            >
                            Continuar
                        </Button>
                    </Box>
                </center>
            </div>
        </div>
    </body>
  );
}

export default GenerarPago