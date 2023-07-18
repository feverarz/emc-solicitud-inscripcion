import React, {useContext, useEffect, useRef,useState} from 'react'
import {TextField, 
        Button, 
        Box ,
        Typography,
        Checkbox,
        FormControlLabel,
        Select,makeStyles ,
        LinearProgress ,
        Grid,
        CardActions,
        CardContent,
        CardMedia,CardHeader } from "@material-ui/core";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Resumen,Finalizar,NumeroTarjeta,DatosPersonales,TiposTarjeta,Carrera,Instrumento,Nivel,Programa,Modalidad,Horario,Cuatrimestre,Ubicacion,Telefonos,GenericCard} from './index'
import {useHelper} from '../hooks/useHelper'
import {useCards} from '../hooks/useCards'
import {Dialogos} from '../componentes/Dialogos'

import Alert from '@mui/material/Alert';
import { useTimePickerDefaultizedProps } from '@mui/x-date-pickers/TimePicker/shared';

export const LayoutCards = ()=>{
    const { datos,
            error,
            finalizar,
            limpiarError,
            cargando,imprimir,
            datosPagoOK, 
            datosPersonalesOK,
            datosUbicacionOK,
            datosContactoOK,
            datosFinalesOK,reiniciar,codigoFinal} = useCards()
    const {fechaCambioFormato,hacerScroll} = useHelper()
    const [activarLoading,setActivarLoading] =useState(false)
    const solicitudPreparada =  useRef(false)
    const [datosConfirmados,setDatosConfirmados] = useState(false)
    const [impresion,setImpresion] = useState("")

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
                }, 500);
            }else{
                setActivarLoading(false)
            }
        }
    ,[datos])

    const confirmarDatos = ()=>{
        setDatosConfirmados(true)
    }

    const procesarCancelarFinalizacion = ()=>{
        setDatosConfirmados(false)
    }

    const procesarFinalizacion = ()=>{
        setDatosConfirmados(false)
    }

    const iniciarImpresion = ()=>{
        setImpresion(imprimir())
    }

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex',maxWidth:'800px',marginLeft:'auto',marginRight:'auto', flexDirection:'column', padding:'1px', justifyContent:'center',background:'#E7EBF0'}}> 
        {!activarLoading && <GenericCard titulo={datosPersonalesOK()[0] ? "Ingresá tus datos personales" : "Para iniciar la solicitud primero ingresá tus datos personales"}
                        id='tl-dpersonales' 
                        mostrar={true} 
                        error={!datosPersonalesOK()[0]}
                        mensajeError = {datosPersonalesOK()[1]}
                        dobleMensajeError
                        noHacerScroll>
                    <DatosPersonales/>
            </GenericCard>}
        {activarLoading && <Box sx={{ width: '100%' }}>
            <Typography variant='body2' color='primary'>Se está iniciando la solicitud</Typography>
            <LinearProgress title='Cargando'/>
        </Box>}
        {datosPersonalesOK()[0] && !activarLoading && <div>
            <GenericCard titulo=" Ingresá tu ubicación" id='tl-ubicacion' 
                        mostrar={true} 
                        error={!datosUbicacionOK()[0]}
                        mensajeError = {datosUbicacionOK()[1]}
                        >
                <Ubicacion/> 
            </GenericCard>
            <GenericCard titulo="Ingresá tus datos de contacto" 
                    id='tl-contacto' 
                    mostrar={datosUbicacionOK()[0]}
                    error={!datosContactoOK()[0]}
                    mensajeError = {datosContactoOK()[1]}
                    dobleMensajeError>
                <Telefonos/>
            </GenericCard>
            <GenericCard titulo="Elegí una o más carreras para cursar" 
                            id='tl-carrera'
                            mostrar={datosContactoOK()[0]}
                            error={datos.carreras.length==0}
                            mensajeError={'Falta elegir una carrera para continuar'}>
                    <Carrera/>
            </GenericCard>
            <GenericCard titulo="Elegí un instrumento" 
                        id='tl-instrumento' 
                        //mostrar={datos.carrera.trim()!=''}
                        mostrar={datos.carreras.length>0}
                        error={datos.instrumento==-1}
                        mensajeError={'Falta elegir un instrumento para continuar'}>
                <Instrumento/>
            </GenericCard>
            <GenericCard titulo="Elegí tu nivel de ingreso" 
                            id='tl-nivel'  
                            mostrar={datos.instrumento>0}
                            error={datos.nivel==-1}
                            mensajeError={'Falta elegir un nivel para continuar'}>
                <Nivel/>
            </GenericCard>
            <GenericCard titulo="Elegí un programa" 
                            id='tl-programa'
                            mostrar={datos.nivel>0}
                            error={datos.programa==-1}
                            mensajeError={'Falta elegir un programa para continuar'}>
                <Programa/>
            </GenericCard>
            <GenericCard titulo="Elegí una modalidad" 
                        id='tl-modalidad' 
                        mostrar={datos.programa>0}
                        error={datos.modalidad==-1}
                        mensajeError={'Falta elegir una modalidad para continuar'}>
                <Modalidad/>
            </GenericCard>
            <GenericCard titulo="Elegí un cuatrimestre" 
                        id='tl-cuatrimestre' 
                        mostrar={datos.modalidad>0}
                        error={datos.cuatrimestre==-1}
                        mensajeError={'Falta elegir un cuatrimestre para continuar'}>
                <Cuatrimestre/>
            </GenericCard>
            <GenericCard titulo="Elegí un horario" 
                        id='tl-horario' 
                        mostrar={datos.cuatrimestre>0}
                        error={datos.horario==-1}
                        mensajeError={'Falta elegir un horario para continuar'}>
                <Horario/>
            </GenericCard>
         
            <GenericCard titulo="Confirmá tus datos" 
                    id='tl-finalizar' 
                    mostrar={datosFinalesOK()[0]}
                    error={!datosFinalesOK()[0]}
                    mensajeError = {datosFinalesOK()[1]}
                    subtitulo='Por favor verificá los datos ingresados'
                    >
                {<Resumen confirmarDatos={confirmarDatos}/>}
                {/*<Finalizar/>*/}
            </GenericCard>
            <Dialogos open={datosConfirmados} 
                    titulo='Para continuar por favor ingresá los datos de tu tarjeta y aceptá los términos y condiciones' 
                    subtitulo='bla bla' 
                    procesarCancelar = {procesarCancelarFinalizacion}
                    error={datosPagoOK()[1]}>
                        <TiposTarjeta/>    
                        <NumeroTarjeta/>   
                        {datosPagoOK()[0] && <Fin procesar={procesarFinalizacion}/>}                         
                   </Dialogos>
        </div>}
        <Dialogos open={error} 
                    titulo='Se produjo un error' 
                    procesarResultado={limpiarError}
                    fullscreen={true}
                    >
                        <Box>
                        <p>Por favor comunícate con administración informando el código de error:</p>
                        <h3>{error}</h3>
                        <a target="_blank" href="http://www.escuelademusica.org/contacto/">Abrir la página de contacto</a>
                        </Box>
        </Dialogos>
        <Dialogos open={codigoFinal} 
                    titulo='Solicitud enviada' 
                    procesarResultado={reiniciar}
                    fullscreen={true}
                    >
                        <Box>
                            <p>Por favor comunícate con administración informando el código de solicitud:</p>
                            <h3>{codigoFinal}</h3>
                            <h4>Muchas gracias!</h4>
                            {/*<Button onClick={iniciarImpresion}>Imprimir</Button>*/}
                            <a target="_blank" href="http://www.escuelademusica.org/contacto/">Abrir la página de contacto</a>
                        </Box>
        </Dialogos>
        { impresion && <iframe title="PDF Viewer" src={impresion} width="100%" height="600" />}
     </Box>
}

const Fin = ({procesar})=>{
    const [acepto,setAcepto]= useState(false)
    const [verTerminos,setVerTerminos]= useState(false)

    const handleCheck = (e)=>{
        setAcepto(e.target.checked)
    }

    return <Box>
           
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Checkbox  color="primary"  onChange={handleCheck} checked={acepto} />
                <>
                    He leído y acepto los <Button color='primary' style={{textTransform: 'none'}} variant='text' onClick={()=>setVerTerminos(true)}>
                        términos y condiciones
                    </Button>
                </>
            </Box>
            
            <Box sx={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>  
               <Finalizar deshabilitar={!acepto}/>
          </Box>

          <Dialogos open={verTerminos} 
                    titulo='Términos y condiciones' 
                    procesarResultado={()=>setVerTerminos(false)}
                    >
                        <>
                        <Typography variant="subtitle1">Primer punto</Typography>
                        <Typography variant="subtitle1">Segundo punto</Typography>
                        <Typography variant="subtitle1">Tercer punto</Typography>

                        </>
            </Dialogos>
    </Box>
}