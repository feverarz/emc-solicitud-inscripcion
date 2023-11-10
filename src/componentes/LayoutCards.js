import React, { useEffect, useRef, useState } from 'react'
import { 
        Box ,
        Typography,
        makeStyles,
        LinearProgress
     } from "@material-ui/core";
import {Resumen,Finalizar,DatosPersonales,Carrera,Instrumento,Nivel,Programa,Modalidad,Horario,Cuatrimestre,Ubicacion,Telefonos,GenericCard} from './index'
import {useHelper} from '../hooks/useHelper'
import {useCards} from '../hooks/useCards'
import {Dialogos} from '../componentes/Dialogos'
import { BuscarAlumno } from './BuscarAlumno';
import { Link } from '@mui/material';
import { Reingresante } from './Reingresante';
import Logo from './Logo';

export const LayoutCards = ()=>{
    const { datos,
            error,
            limpiarError,
            cargando,
            imprimir,
            datosPersonalesOK,
            datosUbicacionOK,
            datosContactoOK,
            datosFinalesOK,
            reiniciar,
            codigoFinal
        } = useCards()
    const {hacerScroll} = useHelper()
    const [activarLoading,setActivarLoading] =useState(false)
    const solicitudPreparada =  useRef(false)
    const [datosConfirmados,setDatosConfirmados] = useState(false)
    const [impresion,setImpresion] = useState("")
    const [esReingresante, setEsReingresante] = useState(null)
    const [iniciarFormulario, setIniciarFormulario ] = useState(false)
    const [habilitarFin, setHabilitarFin ] = useState(false)

    useEffect(() => {
        if (habilitarFin) {
            console.log('habilitando');
        }
    }, [habilitarFin]);

    const habilitar = () => {
        setHabilitarFin(true)
        console.log('habilitando');
    };



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
            if(datosPersonalesOK()[0] && solicitudPreparada.current===false){
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

    return <Box 
            sx={{
                display:'flex',
                maxWidth:'800px',
                marginLeft:'auto',
                marginRight:'auto', 
                flexDirection:'column', 
                padding:'10px', 
                justifyContent:'center',
                background:'#ffffff',
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}> 
            <Box
            sx={{
                padding:'20px 0',
                alignSelf:'start',
                paddingLeft:'16px'
            }}>
                <Typography variant="h4" >
                    Solicitud de inscripción
                </Typography>
            </Box>
        {!activarLoading && esReingresante === null && <GenericCard titulo={"Indique si es un nuevo alumno o desea re-inscribirse a la escuela"} mostrar={true}>
            <Reingresante setEsReingresante={setEsReingresante} setIniciarFormulario={setIniciarFormulario} />
        </GenericCard>

        }
        {!activarLoading && esReingresante && <GenericCard titulo={"Ingrese su tipo y número de documento"} mostrar={true}>
            <BuscarAlumno setEsReingresante={setEsReingresante} setIniciarFormulario={setIniciarFormulario}/>
        </GenericCard>

        }
        {!activarLoading && iniciarFormulario && <GenericCard titulo={datosPersonalesOK()[0] ? "Ingresá tus datos personales" : "Para iniciar la solicitud primero ingresá tus datos personales"}
                        subtitulo={
                            <>
                                Presione en el siguiente enlace para volver atras: <Link sx={{ cursor: 'pointer' }} onClick={() => {
                                    setEsReingresante(null)
                                    setIniciarFormulario(false)
                                    }} >
                                Volver al inicio 
                                </Link>
                            </>
                        }
                        id='tl-dpersonales' 
                        mostrar={true} 
                        error={!datosPersonalesOK()[0]}
                        mensajeError = {datosPersonalesOK()[1]}
                        noHacerScroll>
                    <DatosPersonales/>
            </GenericCard>}
        {activarLoading && <Box sx={{ width: '100%' }}>
            <Typography variant='body2' >Se está iniciando la solicitud</Typography>
            <LinearProgress title='Cargando'color='secondary'/>
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
                            error={datos.carreras.length===0}
                            mensajeError={'Falta elegir una carrera para continuar'}>
                    <Carrera/>
            </GenericCard>
            <GenericCard titulo="Elegí un instrumento" 
                        id='tl-instrumento' 
                        //mostrar={datos.carrera.trim()!=''}
                        mostrar={datos.carreras.length>0}
                        error={datos.instrumento===-1}
                        mensajeError={'Falta elegir un instrumento para continuar'}>
                <Instrumento/>
            </GenericCard>
            <GenericCard titulo="Elegí tu nivel de ingreso" 
                            id='tl-nivel'  
                            mostrar={datos.instrumento>0}
                            error={datos.nivel===-1}
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
                        error={datos.cuatrimestre===-1}
                        mensajeError={'Falta elegir un cuatrimestre para continuar'}>
                <Cuatrimestre/>
            </GenericCard>
            <GenericCard titulo="Elegí un horario" 
                        id='tl-horario' 
                        mostrar={datos.cuatrimestre>0}
                        error={datos.horario===-1}
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
            </GenericCard>
                <Dialogos open={datosConfirmados} 
                    titulo='Para continuar por realice el pago correspondiente a la opcion elegida' 
                    subtitulo='' 
                    procesarCancelar = {procesarCancelarFinalizacion}
                    >
                        <a onClick={habilitar} href={'https://ventasonline.payway.com.ar/web/tienda/3420/escuela-de-m%C3%BAsica-contempor%C3%A1nea'} target="_blank" rel="noreferrer">
                            Link de pago
                        </a>
                        <p color='red'>Una vez realizado el pago haz click en 'Generar la inscripción' para completar el formulario de inscripción</p>                                                
                        <Fin habilitarFin={habilitarFin}></Fin>
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
                    titulo='Se envió correctamente la solicitud' 
                    procesarResultado={reiniciar}
                    fullscreen={true}
                    >
                        <Box>
                            <h3>{codigoFinal}</h3>
                            <Typography variant="h3">{123145}</Typography>
                            <br></br>
                            <br></br>
                            <div>
                                <div>
                                    <a href='https://wa.link/17hzkn' target='_blank'>ir a Whatsapp</a>
                                    <br></br>
                                    <br></br>
                                    Número Whatsapp: (+54 11) 6441 – 1352
                                </div>
                                <div>
                                    <br></br>
                                    ó
                                    <br></br>
                                    <p>Telefono: (+54 11) 4382 – 8237</p>
                                </div>
                            </div>
                            <h4>Muchas gracias!</h4>
                            {/*<Button onClick={iniciarImpresion}>Imprimir</Button>*/}
                            <a target="_blank" href="http://www.escuelademusica.org/contacto/">Abrir la página de contacto</a>
                        </Box>
                        <Logo width={'300'}></Logo>
        </Dialogos>
        { impresion && <iframe title="PDF Viewer" src={impresion} width="100%" height="600" />}
     </Box>
}

const Fin = (props)=>{
    const { habilitarFin } = props
    return  <Box>
                <Box sx={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>  
                    <Finalizar deshabilitar={!habilitarFin}/>
                </Box>
            </Box>
}