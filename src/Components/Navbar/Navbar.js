import React,{useState} from 'react'
import { Toolbar,Typography, Button,Menu,MenuItem} from '@mui/material'

import { Box } from '@mui/system';
import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/core';
import theme from '../../Temaconfig';
import BarraAulaV from '../Header/BarraAulaV';



const useStyles= makeStyles({

  imagenes:{
    width:'160px',
    height: '40px',
    marginLeft: theme.spacing(6.8),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0),
},


})



const Navbar = () => {

  function Info() {
    window.open("https://wa.link/xgvpjn");
  }

  const [anchorEl,setanchoEl]=useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick=(e)=>{
    setanchoEl(e.currentTarget);
  };

  const handleClose=()=>{
    setanchoEl(null);
  }

  const classes = useStyles()

  return (
    <>
    <BarraAulaV/>
    
    <Box elevation={2} sx={{backgroundColor:"white"}}>
      <Toolbar>
        <Box 
          sx={{
            display:"flex",
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%',
            padding:"5px 0px"
          }}
            component='div'>

          {/* Logo */}
          <Box>
          <img src={logo} alt="imagen de logo" className={classes.imagenes} />
          </Box>

          {/*lINKS */}
          <Box sx={{display:'flex'}} >
            <Typography  sx={{marginTop:'7px',marginRight:'20px', cursor:'pointer', color:'#616161'}} >
              Inicio
            </Typography>

            <Typography  sx={{marginTop:'7px',marginRight:'20px', cursor:'pointer', color:'#616161'}}>
              Servicios
            </Typography>

            <Typography  sx={{marginTop:'7px',marginRight:'20px', cursor:'pointer', color:'#616161'}} aria-controls='basic-menu' aria-haspopup="true" aria-expanded={openMenu ? 'true':undefined}
            onClick={handleClick}
            >
              Niveles
            </Typography>
            
            {/*Dropdown Items*/}
            <Menu id="basic-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{
          'aria-labelledby': 'basic-button'}} >
              <MenuItem onClick={handleClose} >Inicial</MenuItem>
              <MenuItem onClick={handleClose}>Primaria</MenuItem>
              <MenuItem onClick={handleClose}>Secundaria</MenuItem>
            </Menu>


            <Typography sx={{marginTop:'7px',marginRight:'20px', cursor:'pointer', color:'#616161'}} variant="body1" color="initial">
              <a style={{textDecoration:'none',color:'#616161'}} href='#Information'>
                Información
              </a>
            </Typography>

            <Typography  onClick={Info}  sx={{marginTop:'7px', marginRight:'20px', cursor:'pointer', color:'#616161'}} variant="body1" color="initial">
              Contactanos
            </Typography>

            <Button href='/PreMatricula'  sx=
            {{marginLeft:'160px',
            right:'100px',
            backgroundColor:"#e53935",
            fontSize:"0.85rem",
            boxSizing: 'border-box', 
            color:"white",
            '&:hover': {
              backgroundColor: '#ef5350',
              borderColor: '#cc0041',
              boxShadow: 'none',
              color:"white",
            }, }}  disableElevation variant='contained' >
              Matriculate
            </Button>

          </Box>

        </Box>

      </Toolbar>
      
    </Box>
    </>
  )
}

export default Navbar