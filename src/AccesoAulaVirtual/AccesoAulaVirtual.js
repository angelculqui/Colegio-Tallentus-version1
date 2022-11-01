import React, {useState} from 'react'
import { Grid, Container, Paper, Typography,TextField,Button,CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import intranet from '../Components/images/intranet.jpg'
import Logoinicio from '../Components/images/Logoinicio.png'


const useStyles = makeStyles (theme =>({
  root:{
      backgroundImage: `url(${intranet})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
  },

  container:{
    opacity: '0.8',
    height: '72%',
    marginTop: theme.spacing(10),
    maxWidth: '400px',
    [theme.breakpoints.down(400+ theme.spacing(2)+ 2 )]:{
      marginTop: 0,
      width: '100%',
      height: '100%',
    }
  },

  div:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  avatarstyle:{
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },

  form:{
    width: '100%',
    marginTop: theme.spacing(1)
  },
  button:{
    margin: theme.spacing(3,0,2)
    
  },
  
  imagenes:{
    width:'112px',
    height: '112px',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(-4),
},

}))


const AccesoAulaVirtual = () =>{
  const [body,setBody]=useState({nickname:'',password:'' })
const classes = useStyles();

const handleChange = e =>{
  console.log(e.target.value)
  setBody({
    ...body,
    [e.target.name]:e.target.value
  })
}

const onSubmit =()=>{
  console.log(body)
}

  return(
    <Grid container component='main' className={classes.root} >
      <CssBaseline/>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
        <div className={classes.div} >
          <img src={Logoinicio} alt="Descripción de imagen" className={classes.imagenes} />
          <Typography component='h1' variant='h5'>Iniciar Sesión</Typography>
          <form className={classes.form} >
            <TextField 
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              variant='outlined'
              label='Nombre de Usuario, correo o movil'
              name='nickname'
              value={body.nickname}
              onChange= {handleChange}
            />
            <TextField 
              fullWidth
              type='password'
              color='primary'
              margin='normal'
              variant='outlined'
              label='password'
              name= 'password'
              value={body.password}
              onChange= {handleChange}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary' 
              size='large'
              className={classes.button}
              onClick= {()=>onSubmit()}
            >
              Ingresar
            </Button>
            <Typography gutterBottom variant="body2" color="textSecondary" align='center' component="p" >¿Olvidaste tu contraseña?</Typography>
          </form>
        </div>
      </Container>
    </Grid>
  )
}
export default AccesoAulaVirtual

