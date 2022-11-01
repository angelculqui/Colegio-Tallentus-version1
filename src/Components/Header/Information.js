import React from 'react'
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Typography } from '@mui/material'

import { Form } from 'semantic-ui-react';


const Information = () => {

  return (


        <Card  style={{maxWidth: '450px', margin: "30px 0px 0px 0px ", padding:"25px 5px", opacity: '0.85', position:'relative',left:'770px' }}  >
            <CardContent elevation={5} >
                <Typography gutterBottom variant='h5' >¿Quieres saber más?</Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" component="p" >Déjanos tus datos y conoce nuestra propuesta educativa</Typography>
                <Form>
                <Grid container spacing={1} > 
                    <Grid xs={12} sm={6} item>
                        <TextField label="Nombre" placeholder='Ingrese Nombre' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Apellido" placeholder='Ingrese Apellido' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid xs={12} item>
                    <TextField type="email" label="Email" placeholder='Ingrese Email' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid xs={12} item>
                    <TextField type="number" label="Celular" placeholder='Ingrese número de celular' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid xs={12} item>
                    <TextField label="Mensaje" multiline rows={4} placeholder='Ingrese el mensaje aqui' variant='outlined' fullWidth required />
                    </Grid>
                    <Grid  xs={12} item>
                    <Button type="submit" variant='contained' color="primary" fullWidth >Enviar</Button>
                    </Grid>
                </Grid>
                </Form>
            </CardContent>
        </Card>

  )
}

export default Information