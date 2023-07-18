import React, {useContext, useEffect, useRef,useState} from 'react'
import {TextField, 
        Button, 
        Box ,
        Typography,
        Switch,
        FormGroup,
        FormControlLabel,
        Select,makeStyles ,
        LinearProgress ,
        Card,
        CardActions,
        CardContent,
        CardMedia,CardHeader } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {DatosPersonales} from './DatosPersonales'
import {Dialogos} from './Dialogos'
import {useHelper} from '../hooks/useHelper'
import {Carrera} from './Carrera'
import {Instrumento} from './Instrumento'
import {Nivel} from './Nivel'
import {Programa} from './Programa'
import {Modalidad} from './Modalidad'
import {Horario} from './Horario'
import {Cuatrimestre} from './Cuatrimestre'
import {Ubicacion} from './Ubicacion'
import {Telefonos} from './Telefonos'
import Alert from '@mui/material/Alert';
import { useTimePickerDefaultizedProps } from '@mui/x-date-pickers/TimePicker/shared';

export const LayoutCards = ()=>{
    const { datos,
            cargando,datosPersonalesOK,datosUbicacionOK} = useContext(formularioContext)
    const {fechaCambioFormato,hacerScroll} = useHelper()
    const [abrirDialogo,setAbrirDialogo] = useState(true)
    const [error,setError] = useState(null)
    const [activarLoading,setActivarLoading] =useState(false)
    const solicitudPreparada =  useRef(false)
    const datosRef =  useRef(datos)
    const refCarrera = useRef()
    const refInstrumento = useRef()
    const refNivel = useRef()
    const refPrograma = useRef()
    const refModalidad = useRef()
    const refCuatrimestre = useRef()
    const refHorario = useRef()
    const refUbicacion = useRef()
    const refContacto = useRef()

    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : '#D3D3D3',
            color:datos.pais > 0 ? 'black' : 'gray'
        },
        selectprovincia: {
            background:datos.provincia > 0 ? 'white' : '#D3D3D3',
            color:datos.provincia > 0 ? 'black' : 'gray'
        },
        prueba:{
            background:'black',
            color:'white'
        }
      });

    useEffect(()=>{
            if(datosPersonalesOK()[0] && solicitudPreparada.current==false){
                setActivarLoading(true)
                setTimeout(() => {
                    setActivarLoading(false)
                    setTimeout(() => {
                        hacerScroll('tl-carrera')
                        solicitudPreparada.current = true
                    }, 500);
                }, 2500);
            }else{
                setActivarLoading(false)
            }
        }
    ,[datos])

    useEffect(()=>{
        if(datosRef.current.carrera.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-instrumento')
                if(refInstrumento.current){
                    refInstrumento.current.style.background = "#DCDCDC"
                }
            }, 500);
        }
    }
    ,[datos.carrera])

    useEffect(()=>{
        if(datosRef.current.instrumento==-1){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-nivel')
                if(refNivel.current){
                    refNivel.current.style.background = "#DCDCDC"
                }
            }, 500);
        }else{
            if(refInstrumento.current){
                refInstrumento.current.style.background = "#fff"
            }
        }
    }
    ,[datos.instrumento])

    useEffect(()=>{
        if(datosRef.current.nivel.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-programa')
                refPrograma.current.style.background = "#DCDCDC"
            }, 500);
        }else{
            refNivel.current.style.background = "#fff"
        }
    }
    ,[datos.nivel])

    useEffect(()=>{
        if(datosRef.current.programa.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-modalidad')
                refModalidad.current.style.background = "#DCDCDC"
            }, 500);
        }else{
            refPrograma.current.style.background = "#fff"
        }
    }
    ,[datos.programa])

    useEffect(()=>{
        if(datosRef.current.modalidad.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-cuatrimestre')
                refCuatrimestre.current.style.background = "#DCDCDC"
            }, 500);
        }else{
            refModalidad.current.style.background = "#fff"
        }
    }
    ,[datos.modalidad])

    useEffect(()=>{
        if(datosRef.current.cuatrimestre.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-horario')
                refHorario.current.style.background = "#DCDCDC"
            }, 500);
        }else{
            refCuatrimestre.current.style.background = "#fff"
        }
    }
    ,[datos.cuatrimestre])

    useEffect(()=>{
        if(datosRef.current.horario.trim()==''){
            datosRef.current = {...datos}
            setTimeout(() => {
                hacerScroll('tl-ubicacion')
            }, 500);
        }else{
            refHorario.current.style.background = "#fff"
        }
    }
    ,[datos.horario])

    const procesarDatosIngresados = ()=>{

        setError(null)
        
        const validacion = datosPersonalesOK()

        if(validacion[0]){
            setAbrirDialogo(false)
        }else{
            setError(validacion[1])
        }
    }


    const procesarCancelarDatos =()=>{
            setAbrirDialogo(false)
    }

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex', flexDirection:'column', padding:'10px', justifyContent:'center',background:'#E7EBF0'}}> 
       
       <h1 title={JSON.stringify(datosRef.current)}>ver</h1>
       <h1 title={JSON.stringify(datos)}>ver2</h1>
        {!activarLoading && <Card sx={{ maxWidth: 275,margin:'40px' }} variant='outlined'>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <CardHeader title={`Ingresá tus datos personales`} 
                    titleTypographyProps={{
                        variant: "h6",
                        align: "left"
                        ,color:'primary'
                        }}
                    /> 
            </Box>
            {!datosPersonalesOK()[0] && <Alert severity="error">{datosPersonalesOK()[1]}</Alert>
            }
            <CardContent>
                <DatosPersonales/>
                {!datosPersonalesOK()[0] && <Alert severity="error">{datosPersonalesOK()[1]}</Alert>}
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>}
        {activarLoading && <Box sx={{ width: '100%' }}>
            <Typography variant='body2'>Se está iniciando la solicitud</Typography>
            <LinearProgress title='Cargando'/>
        </Box>}
        {datosPersonalesOK()[0] && !activarLoading && <div>
            <Card sx={{ minWidth: 275,marginTop:'150px' }} variant='outlined' ref={refCarrera}>                
                <CardHeader id='tl-carrera' title='Elige una carrera' 
                titleTypographyProps={{
                    variant: "h6",
                    align: "left"
                    ,color:'primary'
                    }}
                /> 
                <CardContent>
                    <Carrera/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            {datos.carrera && <>
            <Card sx={{ minWidth: 275 }} variant='outlined' ref={refInstrumento}>
                <CardHeader id='tl-instrumento' title='Selecciona un instrumento'
                titleTypographyProps={{
                    variant: "h6",
                    align: "left"
                    ,color:'primary'
                    }}
                /> 
                <CardContent>
                    <Instrumento/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.instrumento>-1 && <>
            <Card sx={{ minWidth: 275 }} variant='outlined' ref={refNivel}>
                <CardHeader id='tl-nivel' title='Test de nivel o PIP'
                titleTypographyProps={{
                    variant: "h6",
                    align: "left"
                    ,color:'primary'
                    }}
                /> 
                <CardContent>
                    <Nivel/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.nivel && <>
            <Card sx={{ minWidth: 275 }} variant='outlined' ref={refPrograma}>
                <CardHeader id='tl-programa' title='Elegí un programa'
                titleTypographyProps={{
                    variant: "h6",
                    align: "left"
                    ,color:'primary'
                    }}
                /> 
                <CardContent>
                    <Programa/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.programa && <>
            <Card sx={{ minWidth: 275 }} variant='outlined' ref={refModalidad}>
                <CardHeader id='tl-modalidad' title='Elegí una modalidad de cursado'
                            titleTypographyProps={{
                                variant: "h6",
                                align: "left"
                                ,color:'primary'
                                }}
                /> 
                <CardContent>
                    <Modalidad/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.modalidad && <><Card sx={{ minWidth: 275 }} variant='outlined' ref={refCuatrimestre}>
                <CardHeader id='tl-cuatrimestre' title='Elegí un cuatrimestre'
                            titleTypographyProps={{
                                variant: "h6",
                                align: "left"
                                ,color:'primary'
                                }}
                /> 
                <CardContent>
                    <Cuatrimestre/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.cuatrimestre && <>
            <Card sx={{ minWidth: 275 }} variant='outlined' ref={refHorario}>
                <CardHeader id='tl-horario' title='Elegí un horario'
                            titleTypographyProps={{
                                variant: "h6",
                                align: "left"
                                ,color:'primary'
                                }}
                /> 
                <CardContent>
                    <Horario/>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datos.horario && <><Card sx={{ minWidth: 275 }} variant='outlined' ref={refUbicacion}>
                {!datosUbicacionOK()[0] && <Alert severity="error">{datosUbicacionOK()[1]}</Alert>}
                <CardHeader id='tl-ubicacion' title='Ingresa tu ubicación'
                            titleTypographyProps={{
                                variant: "h6",
                                align: "left"
                                ,color:'primary'
                                }}
                /> 
                <CardContent>
                    <Ubicacion/>
                    {!datosUbicacionOK()[0] && <Alert severity="error">{datosUbicacionOK()[1]}</Alert>}
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
            </>}
            {datosUbicacionOK()[0] && <>
            <Card sx={{ minWidth: 275 }} variant='outlined'>
                <CardHeader id='tl-contacto' title='Ingresa tus datos de contacto'
                            titleTypographyProps={{
                                variant: "h6",
                                align: "left"
                                ,color:'primary'
                                }}
                /> 
                <CardContent>
                    <Telefonos/>
                </CardContent>
                <CardActions>
                    <Button size="small">Aplicar</Button>
                </CardActions>
            </Card>
            </>}
        </div>}
     </Box>
}