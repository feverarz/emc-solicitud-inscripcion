import React, {useContext, useEffect, useRef,useState} from 'react'
import {TextField, 
        Button, 
        Box ,
        Typography,
        Switch,
        FormGroup,
        FormControlLabel,
        Select,makeStyles ,
        InputLabel,
        MenuItem,
        FormControl,
        RadioGroup,
        Radio,
        FormLabel,InputAdornment } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import {Dialogos} from './Dialogos'


export const Ubicacion = ()=>{
    const { datos,
            handleChangeProvincia,
            mensaje,
            paises,
            provincias,
            handleChangePais,
            handleChangeOtroPais,
            handleChangeOtraProvincia,
            handleChangeCodPostal,
            handleChangeDomicilio,
            handleChangeLocalidad,
            cargando,resetearPais,
            resetearProvincia,
            handleChangeCodInternacional,
            recuperaProvinciaAnterior} = useContext(formularioContext)

    const otroPaisText = useRef()
    const otraProvinciaText = useRef()
    const [otroPais,setOtropais] = useState(false)
    const [otraProvincia,setOtraProvincia] = useState(false)
    const [errorPais,setErrorPais] = useState(null)
    const [errorProvincia,setErrorProvincia] = useState(null)

    useEffect(()=>{
        if(datos.pais==0 && (datos.otroPais.trim()=='' || datos.otraProvincia.trim()=='')){
            setOtropais(true)
        }else{
            setOtropais(false)
        }
    },[datos.pais])

    useEffect(()=>{
        if(datos.provincia==0 && datos.pais>0){
            if(datos.otraProvincia.trim()==''){
                setOtraProvincia(true)
            }
        }
    },[datos.provincia])

    useEffect(()=>{

        if(datos.otraProvincia.trim()=='' && datos.provincia==0){
            setOtraProvincia(true)
        }
    },[datos.otraProvincia])

    useEffect(()=>{
            setErrorProvincia(null)
            setErrorPais(null)
    },[otraProvincia,otroPais])



    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : '#D3D3D3',
            color:datos.pais > 0 ? 'black' : 'gray',
            textAlign:'left',
            marginTop:'1rem',
        },
        selectprovincia: {
            background:datos.provincia > 0 ? 'white' : '#D3D3D3',
            color:datos.provincia > 0 ? 'black' : 'gray',
            textAlign:'left',
            marginBottom:'1rem'
        },
      });

    const procesarPaisIngresadoPromesa = ()=>{
        return new Promise((resolve,reject)=>{
            if(datos.otroPais.trim()==''){
                 reject('El país ingresaso no es válido')
            }
    
            if(datos.otraProvincia.trim()==''){
                 reject('La provincia ingresada no es válida')
            }
            
            resolve() 
        })
    }

    const procesarPaisIngresado = ()=>{
            if(datos.otroPais.trim()==''){
                 setErrorPais('El país ingresado no es válido')
                 return
            }
    
            if(datos.otraProvincia.trim()==''){
                 setErrorPais('La provincia ingresada no es válida')
                 return
            }
            
            setOtropais(false) 
    }
    
    const procesarProvinciaIngresadaPromesa = ()=>{
        return  new Promise((resolve,reject)=>{
            if(datos.otraProvincia.trim()==''){
                 reject('La provincia ingresada no es válida')
            }else{
                setOtraProvincia(false)
                resolve() 
            }
           
        })
    }
    
    const procesarProvinciaIngresada = ()=>{
            if(datos.otraProvincia.trim()==''){
                 setErrorProvincia('La provincia ingresada no es válida')
            }else{
                setOtraProvincia(false)
            }          
    }


    const procesarCancelarPais =()=>{
            resetearPais()
            setOtropais(false)
    }

    const procesarCancelarPaisPromesa =()=>{
        return new Promise((resolve,reject)=>{
            resetearPais()
            setOtropais(false)
            resolve()
        })
    }

    const procesarCancelarProvincia =()=>{
        recuperaProvinciaAnterior()
        setOtraProvincia(false)
    }

    const procesarCancelarProvinciaPromesa =()=>{

        return new Promise((resolve,reject)=>{
            resolve()
        })
}

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex', flexDirection:'column'}}> 
        <Dialogos open={otroPais} 
                    titulo='Ingresa un país y una provincia' 
                    subtitulo='País' 
                    error={errorPais}
                    procesarCancelar = {procesarCancelarPais}
                    procesarResultado={procesarPaisIngresado}>
                            <TextField fullWidth id="ub-opais-comp" 
                            inputProps={{maxLength: 100}} 
                            value={datos.otroPais} 
                            onChange={handleChangeOtroPais} 
                            autoFocus
                            margin="dense"
                            label="Nuevo país" 
                            variant="outlined" />
                            <TextField fullWidth id="ub-oprovincia_comp" 
                            margin="dense"
                            inputProps={{maxLength: 100}} 
                            value={datos.otraProvincia} 
                            onChange={handleChangeOtraProvincia} 
                            label="Nueva provincia" 
                            variant="outlined" />
        </Dialogos>
        <Dialogos open={otraProvincia} 
                    titulo='Ingresa una provincia' 
                    subtitulo='Provincia' 
                    procesarCancelar = {procesarCancelarProvincia}
                    procesarResultado={procesarProvinciaIngresada}
                    error={errorProvincia}>
                            <TextField fullWidth id="ub-oprovincia" 
                            inputProps={{maxLength: 100}} 
                            autoFocus
                            value={datos.otraProvincia} 
                            onChange={handleChangeOtraProvincia} 
                            label="Nueva provincia" 
                            variant="outlined" />
        </Dialogos>
        <Box sx={{marginTop:'0.5rem'}}>
            <TextField autoFocus fullWidth id="ub-domicilio" inputProps={{maxLength: 50, required:true}} value={datos.domicilio} onChange={handleChangeDomicilio} label="Domicilio completo" variant="filled" />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="ub-localidad" inputProps={{maxLength: 25}} value={datos.localidad} onChange={handleChangeLocalidad} label="Localidad" variant="filled" />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="ub-codpostal" inputProps={{maxLength: 10}} value={datos.codpostal} onChange={handleChangeCodPostal} label="Código postal" variant="filled" />
        </Box>
        <Box sx={{marginTop:'2rem'}}>
            <FormControl fullWidth>
                        {/*<InputLabel id="demo-simple-select-label" color="secondary" variant='outlined'>País</InputLabel>*/}
                        <Select fullWidth
                            labelId="select-label-pais"
                            id="sl-pais"
                            value={datos.pais}
                            label="País"
                            onChange={handleChangePais}
                            className={classes.selectpais}
                        >
                            {paises.map(item=>{
                                return <MenuItem value={item.id_pais}>{item.nombre}</MenuItem>
                            })}

                        </Select>
                </FormControl>
            {datos.otroPais && <Box sx={{ display: 'flex',alignItems: 'center',justifyContent:'left' }}>
                <p style={{textAlign:'left',margin:'0'}}>{datos.otroPais}</p>    
                <Button title='Borrar país' onClick={resetearPais}><DeleteOutlineIcon/></Button>                          
            </Box>}              

        </Box>
        <Box sx={{marginTop:'2rem'}}>
            <FormControl fullWidth>
                    {/*<InputLabel sx={{ marginTop: '100rem' }}  id="demo-simple-select-label" color="secondary" variant='outlined'>Provincia</InputLabel>*/}
                    <Select fullWidth
                        labelId="select-label-provincia"
                        id="sl-provincia"
                        value={datos.provincia}
                        label="Provincia"
                        onChange={handleChangeProvincia}
                        className={classes.selectprovincia}
                    >
                        {provincias.filter(item=>item.id_pais==datos.pais).sort((a,b)=>a.nombre.localeCompare(b.nombre)).map(item=>{
                            return <MenuItem value={item.id_provincia}>{item.nombre}</MenuItem>
                        })}

                    </Select>
            </FormControl>
            {datos.otraProvincia && <Box sx={{ display: 'flex',alignItems: 'center',justifyContent:'left' }}>
                <p style={{textAlign:'left',margin:'0'}}>{datos.otraProvincia}</p>    
                <Button title='Borrar provincia' onClick={resetearProvincia}><DeleteOutlineIcon/></Button>                          
            </Box>}
        </Box>
     </Box>
}