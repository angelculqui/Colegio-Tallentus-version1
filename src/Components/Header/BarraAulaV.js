import { makeStyles } from '@material-ui/styles'
import React from 'react'
import theme from '../../Temaconfig'
import { Box } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
import Typography from '@mui/material/Typography';
import {Icon} from '@material-ui/core'
import { Button} from '@material-ui/core'

const useStyles= makeStyles({
 
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
  
  
  })



const BarraAulaV = () => {

    const classes = useStyles()

  return (
    <Box sx={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        padding:"3px 0px",
        backgroundColor:"#0d47a1",
      }}
        
        component='div'
        >
          
        <Box  sx={{backgroundColor:"#0d47a1",display:"flex",alignItems:'center',width:'100%',padding:"5px 0px"}}>
            <CallIcon sx={{ml:10, fontSize:'18px',marginTop:'3px'}} />
            <Typography gutterBottom variant="body1" color="white" sx={{fontSize:'small', height:"0vh",marginTop:'-13px', ml:1}}>933486446</Typography>
        </Box>

        <Box sx={{display:'flex'}} >  
            
            <Button href='/AccesoAulaVirtual' disableRipple variant='contained' color='primary' size='small' startIcon={<Icon sx={{fontSize:'small'}} >computer</Icon>} className={classes.menuButton}>
                    Aula Virtual
            </Button>
        </Box>
    </Box>




  )
}

export default BarraAulaV