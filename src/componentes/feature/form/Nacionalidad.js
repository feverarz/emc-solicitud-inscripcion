import React, { useContext, useState, useEffect } from 'react'
import { TextField, Box, Switch, FormControlLabel, Select, makeStyles, MenuItem, FormControl, Button, Grid, InputLabel } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'
import {Dialogos} from './Dialogos'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Nacionalidad = ()=>{
    const { datos,
            nacionalidades,
            cargando,
            handleChangeNacionalidad,
            setNacionalidadArgentina,
            handleChangeOtraNacionalidad,
            resetearNacionalidad
        } = useContext(formularioContext)
    const [argentino,setArgentino] = useState(datos.nacionalidad===4 ? true : false)
    const [otraNacionalidad,setOtraNacionalidad] = useState(false)
    const [error,setError] = useState(null)

    const useStyle = makeStyles({
        selectx: {
            background: 'white',
            color:'black',
            textAlign:'left',
            marginTop:'1rem',
            marginBottom:'1rem'
        }
      });

     
    useEffect(()=>{

        if(datos.nacionalidad===69 && datos.otraNacionalidad.trim()===''){
            setOtraNacionalidad(true)
        }else if(datos.nacionalidad===4){
            setArgentino(true)           
            setOtraNacionalidad(false)
        }
        else{
            setOtraNacionalidad(false)
        }

    },[datos.nacionalidad])

    const classes = useStyle();

    const handleChangeArgentino = (e)=>{
        setArgentino(e.target.checked)
        setNacionalidadArgentina(e.target.checked)
    }

    const procesarCancelarOtraNacionalidad =()=>{
        setNacionalidadArgentina(true)
        setOtraNacionalidad(false)
    }

    const procesarNacionalidadIngresada = ()=>{
        if(datos.otraNacionalidad.trim()===''){
             setError('La nacionalidad ingresada no es válida')
             return
        }
        
        setOtraNacionalidad(false) 
    }

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{marginTop:'1rem'}}>
         <Dialogos open={otraNacionalidad} 
                    titulo='Ingresa una nacionalidad' 
                    subtitulo='Nacionalidad' 
                    procesarCancelar = {procesarCancelarOtraNacionalidad}
                    procesarResultado={procesarNacionalidadIngresada}
                    error={error}>
                            <TextField fullWidth id="tx-nacionalidad" 
                            inputProps={{maxLength: 30}} 
                            autoFocus
                            value={datos.otraNacionalidad} 
                            onChange={handleChangeOtraNacionalidad} 
                            label="Nueva nacionalidad" 
                            variant="outlined" />
        </Dialogos>
        <Grid container spacing={2} alignItems='center'> 
            <Grid item xs={12} sm={6}>
                <Box sx={{textAlign:'left', minHeight:'50px'}}>
                    <FormControlLabel control={<Switch color="secondary" checked={argentino} onChange={handleChangeArgentino} />} label="Soy argentino/a" />
                </Box>    
            </Grid>
            <Grid item xs={12} sm={6}>
            {!argentino && <><InputLabel style={{textAlign:'left'}} id="lbl-sexo">Nacionalidad</InputLabel>
                 <FormControl fullWidth>
                        <Select fullWidth
                            labelId="lb-nacionalidad"
                            id="sl-nacionalidad"
                            value={datos.nacionalidad}
                            label="Nacionalidad"
                            onChange={handleChangeNacionalidad}
                            className={classes.select}
                            title='Nacionalidad'
                        >
                            <MenuItem value={-1} disabled>Selecciona tu nacionalidad</MenuItem>
                            {nacionalidades.map(item=>{
                                return <MenuItem value={item.id_nacionalidad}>{item.nombre}</MenuItem>
                            })}
                        </Select>
                </FormControl>
                {datos.otraNacionalidad && <Box sx={{ display: 'flex',alignItems: 'center',justifyContent:'left' }}>
                <p style={{textAlign:'left',margin:'0'}}>{datos.otraNacionalidad}</p>    
                <Button title='Borrar nacionalidad' onClick={resetearNacionalidad}><DeleteOutlineIcon/></Button>                          
                </Box>}  
              </>}       
                  
            </Grid>
        </Grid>
    </Box>
}
