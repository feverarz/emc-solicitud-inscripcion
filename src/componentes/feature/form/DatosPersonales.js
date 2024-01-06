import React, {useContext,useState,useEffect} from 'react'
import {TextField, Grid, Box, Select, makeStyles, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'
import { Nacionalidad } from './Nacionalidad'
import {SexosSelect} from './SexosSelect'
import {FechaNacimiento} from './FechaNacimiento'

export const DatosPersonales = ()=>{
    const { datos,
        handleChangeApellido,
        handleChangeDocumento,
        handleChangeNombre,
        handleChangeFechaNac,
        handleChangeTipoDoc,
        tiposdoc,
        cargando
        } = useContext(formularioContext)

        const [longitudDoc,setLongitudDoc]= useState(0)

useEffect(() => {
    if(tiposdoc.length>0){
        const tipodocumento = tiposdoc.filter(item=>item.id_insc_tipodoc===datos.tipo_doc)
        setLongitudDoc(tipodocumento[0]?.longitud)
    }
}, [datos.tipo_doc,tiposdoc])
        
    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : 'gray',
            color:'black',
            textAlign:'left',
        },
        selectprovincia: {
            background:datos.provincia > 0 ? 'white' : 'gray',
            color:'black'
        },
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <TextField fullWidth inputProps={{maxLength: 25}} id="dp-nombre" autoFocus value={datos.nombre} onChange={handleChangeNombre} label="Nombre" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <TextField fullWidth inputProps={{maxLength: 25}} id="dp-apellido" value={datos.apellido} onChange={handleChangeApellido} label="Apellido" />
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <FormControl fullWidth>
                    <InputLabel style={{textAlign:'left'}} id="lbl-tipo-doc">Tipo de documento</InputLabel>
                        <Select fullWidth
                            labelId="select-label-tipodoc"
                            id="sl-tipodoc"
                            value={datos.tipo_doc}
                            label="Tipo de documento"
                            onChange={handleChangeTipoDoc}
                            className={classes.selectpais}
                        >
                            {tiposdoc.map(item=>{
                                return <MenuItem key={item.nombre} value={item.id_insc_tipodoc}>{item.nombre}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <TextField fullWidth inputProps={{maxLength: longitudDoc}} id="dp-documento" value={datos.documento} onChange={handleChangeDocumento} label="Nro. de documento" />
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop:'10px'}}>
            <Grid item xs={6}>
                <FechaNacimiento titulo='Fecha de nacimiento' fecha={datos.fecha_nac} setFecha={handleChangeFechaNac}/>      
            </Grid> 
            <Grid item xs={6}>
                <SexosSelect/>
            </Grid> 

        </Grid>
        <Nacionalidad/>   
    </Box>      
}