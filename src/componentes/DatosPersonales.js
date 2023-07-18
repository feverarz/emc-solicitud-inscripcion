import React, {useContext,useState,useEffect} from 'react'
import {TextField, Grid, Box ,Switch,FormGroup,FormControlLabel,Select,makeStyles ,InputLabel,MenuItem,FormControl,RadioGroup,Radio,FormLabel} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import {Nacionalidad} from '../componentes/Nacionalidad'
import {Sexo} from '../componentes/Sexo'
import {Fecha} from '../componentes/Fecha'
import {useHelper} from '../hooks/useHelper'
import {SexosSelect} from '../componentes/SexosSelect'
import {FechaNacimiento} from '../componentes/FechaNacimiento'

export const DatosPersonales = ()=>{
    const { datos,
        handleChangeApellido,
        handleChangeDocumento,
        handleChangeNombre,
        handleChangeNacionalidad,
        handleChangeFechaNac,
        handleChangeTipoDoc,tiposdoc,
        handleChangeSexo,cargando,
        datosPersonalesOK} = useContext(formularioContext)
        const {obtenerFechaDiamenosN,validarFechaPosteriorNanios} = useHelper()

        const [fecha,setFecha] = useState('')//new Date())
        const [longitudDoc,setLongitudDoc]= useState(0)

useEffect(() => {
    if(tiposdoc.length>0){
        const tipodocumento = tiposdoc.filter(item=>item.id_insc_tipodoc==datos.tipo_doc)
        setLongitudDoc(tipodocumento[0]?.longitud)
    }
}, [datos.tipo_doc,tiposdoc])
        
    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : 'gray',
            color:'black'
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
                    <TextField fullWidth inputProps={{maxLength: 25}} id="dp-nombre" autoFocus value={datos.nombre} onChange={handleChangeNombre} label="Nombre" variant="filled" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <TextField fullWidth inputProps={{maxLength: 25}} id="dp-apellido" value={datos.apellido} onChange={handleChangeApellido} label="Apellido" variant="filled" />
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <InputLabel style={{textAlign:'left'}} id="lbl-tipo-doc">Tipo de documento</InputLabel>
                    <FormControl fullWidth>
                        {/*<InputLabel id="demo-simple-select-label" color="secondary" variant='outlined'>País</InputLabel>*/}
                        <Select fullWidth
                            labelId="select-label-tipodoc"
                            id="sl-tipodoc"
                            value={datos.tipo_doc}
                            label="Tipo de documento"
                            onChange={handleChangeTipoDoc}
                            className={classes.selectpais}
                        >
                            {tiposdoc.map(item=>{
                                return <MenuItem value={item.id_insc_tipodoc}>{item.nombre}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{marginTop:'1rem'}}>
                    <TextField fullWidth inputProps={{maxLength: longitudDoc}} id="dp-documento" value={datos.documento} onChange={handleChangeDocumento} label="Nro. de documento" variant="filled" />
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
              
    return <Box sx={{display:'flex',flexDirection:'column'}}> 
            <Box sx={{marginTop:'1rem'}}>
                <TextField fullWidth inputProps={{maxLength: 25}} id="dp-nombre" autoFocus value={datos.nombre} onChange={handleChangeNombre} label="Nombre" variant="outlined" />
            </Box>
            <Box sx={{marginTop:'1rem'}}>
                <TextField fullWidth inputProps={{maxLength: 25}} id="dp-apellido" value={datos.apellido} onChange={handleChangeApellido} label="Apellido" variant="outlined" />
            </Box>
            <Box sx={{marginTop:'1rem'}}>
                <TextField fullWidth inputProps={{maxLength: 25}} id="dp-documento" value={datos.documento} onChange={handleChangeDocumento} label="Nro. de documento" variant="outlined" />
            </Box>
            <Fecha titulo='Fecha de nacimiento' fecha={datos.fecha_nac} setFecha={handleChangeFechaNac}/>      
            <Nacionalidad/>
            <Sexo/>
        </Box>
}