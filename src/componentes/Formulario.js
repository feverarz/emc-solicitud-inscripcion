import React,{useState,useContext}  from 'react'
import { formularioContext } from '../contextos/FormularioContext'
import {LayoutCards} from './LayoutCards'
import {GenericCard} from './GenericCard'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Formulario = ()=>{
    const { cargando,procesando,cerrar,datos,error,codigoFinal } = useContext(formularioContext)

    
    if (cargando) {
        return <p>Cargando...</p>
    }

    if (procesando){
       return  <GenericCard titulo="..." 
                    id='tl-finalizar' 
                    mostrar={true}
                    error={true}
                    mensajeError = {'Procesando la solicitud...'}
                    subtitulo='Procesando...'
                    >
            </GenericCard>
    }

    if (error && false){
        return <GenericCard 
        id='tl-error' 
        mostrar={true}
        mensajeError='Comunicate con la oficina de la escuela para verificar el problema'
        error={true}
        subtitulo= 'Lo siento,se produjo un error al enviar la solicitud'
        >
             <h2>Código de error: {error}</h2>
        </GenericCard>
    }

    if ((codigoFinal || cerrar) && false){
        return <GenericCard titulo="" 
        id='tl-finalizar' 
        mostrar={true}
      
        subtitulo=''
        >
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Alert severity="info" style={{fontSize:'large'}}>Listo, ahora comunicate para realizar el primer pago y completar la inscripción</Alert>
                <WhatsAppIcon color='success' fontSize="large" />
                <h2>15-5494-3001</h2>
                <Alert variant='filled' severity="info" style={{fontSize:'x-large'}}>Código de solicitud: {codigoFinal}</Alert>
                <h3>Muchas gracias!</h3>
            </Box>
            
        </GenericCard>
    }

    return <div>
        <p style={{fontFamily:'Pavanam',fontSize:'x-large'}}>
            Solicitud de inscripción
            {/*<div style={{width: "1000px"}}><p style={{fontSize:'small'}}>{JSON.stringify(datos, null, "\t")}</p>
            </div>*/}
        </p>
        <LayoutCards/>
    </div>

}