import React, {useContext, useEffect} from 'react'
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'


export const Reingresante = ({ setEsReingresante, setIniciarFormulario })=>{
    const { resetForm } = useContext(formularioContext)
    
    useEffect(()=> {
        resetForm();
    }, [])

    return <>
    <Box sx={{ display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center', width:'100%' }}>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
            <Grid item xs={6} style={{display:'flex', justifyContent:'flex-end'}}>
                <Button variant='contained' color='secondary' onClick={() => {
                    setIniciarFormulario(true)
                    setEsReingresante(false)
                }}>
                    Inscribirme
                </Button>
            </Grid>
            <Grid item xs={6} style={{display:'flex', justifyContent:'flex-start'}}>
                <Button variant='outlined' color='secondary' onClick={() => setEsReingresante(true)}>
                    Re-Inscribirme
                </Button>
            </Grid>
        </Grid>
        <Box sx={{padding: '2rem'}}>
            <Typography>Si ya formó parte de la escuela como alumno de cualquiera de sus carreras haga click en "Re-Inscribirme". </Typography>
        </Box>
    </Box>
    </>
}