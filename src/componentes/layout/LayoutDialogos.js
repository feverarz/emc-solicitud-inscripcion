import React, {useContext, useEffect, useRef,useState} from 'react'
import {
        Button, 
        Box,
        makeStyles
     } from "@material-ui/core";
import { formularioContext } from '../../contextos/FormularioContext'
import {DatosPersonales} from '../feature/form/DatosPersonales'
import {Dialogos} from '../feature/form/Dialogos'
import {useHelper} from '../../hooks/useHelper'

export const LayoutDialogos = ()=>{
    const { datos,
            cargando,datosPersonalesOK,nacionalidad,sexo} = useContext(formularioContext)
    const {fechaCambioFormato} = useHelper()
    const [abrirDialogo,setAbrirDialogo] = useState(true)
    const [error,setError] = useState(null)
   


    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : '#D3D3D3',
            color:datos.pais > 0 ? 'black' : 'gray'
        },
        selectprovincia: {
            background:datos.provincia > 0 ? 'white' : '#D3D3D3',
            color:datos.provincia > 0 ? 'black' : 'gray'
        },
      });

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

    return <Box sx={{display:'flex', flexDirection:'column'}}> 
        {!(datosPersonalesOK()[0]) && <Button onClick={()=>setAbrirDialogo(true)}>Comenzar</Button>}
        <Dialogos 
            open={abrirDialogo} 
            titulo='Por favor ingresá tus datos personales' 
            subtitulo='' 
            error={error}
            procesarCancelar = {procesarCancelarDatos}
            procesarResultado={procesarDatosIngresados}
            >
                <DatosPersonales/>
        </Dialogos>
     </Box>
}