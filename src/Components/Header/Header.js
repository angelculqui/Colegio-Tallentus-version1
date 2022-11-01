import React from 'react'
import { Box } from '@mui/system'
import fondo from '../images/fondo.jpg'
import Information from './Information'


const Header = () => {
  return (
    <Box 
        sx={{
            minHeight:'85vh',
            backgroundImage:`url(${fondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            height: '100vh',
            marginTop: '0px',
            
            backgroundPosition: 'center',
            
            }}>

        
          <Box component='div' sx={{display:'flex'}} >
                
                <Information/>
                  
          </Box>
    </Box>
  )
}

export default Header