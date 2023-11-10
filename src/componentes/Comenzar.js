import React, {useContext, useState} from 'react'
import {
        Button, 
        Box,
        makeStyles
        } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {DatosPersonales} from './DatosPersonales'
import {Dialogos} from './Dialogos'
import {useHelper} from '../hooks/useHelper'

export const Comenzar = ()=>{
    const { datos, cargando, datosPersonalesOK, nacionalidad, sexo}  = useContext(formularioContext)
    const { fechaCambioFormato } = useHelper()
    const [ abrirDialogo, setAbrirDialogo ] = useState(false)
    const [ error, setError ] = useState(null)
   
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
        <Dialogos open={abrirDialogo} 
                    titulo='Por favor ingresá tus datos personales' 
                    subtitulo='' 
                    error={error}
                    procesarCancelar = {procesarCancelarDatos}
                    procesarResultado={procesarDatosIngresados}>
                            <DatosPersonales/>
        </Dialogos>
        <Box sx={{marginTop:'2rem'}}>
            {datosPersonalesOK()[0] && <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center',justifyContent:'right' }}>
                <p style={{textAlign:'right',margin:'0'}}>{`${datos.nombre} ${datos.apellido}`}</p>    
                <p style={{textAlign:'right',margin:'0'}}>{`${datos.documento}`}</p>    
                <p style={{textAlign:'right',margin:'0'}}>{`${fechaCambioFormato(datos.fecha_nac,'DD/MM/YYYY')}`}</p>    
                <p style={{textAlign:'right',margin:'0'}}>{`${nacionalidad()} - ${sexo()}`}</p>    
                <Button onClick={()=>setAbrirDialogo(true)} title='Modificar tus datos personales'><DeleteOutlineIcon/></Button>                          
            </Box>}              
            
        </Box>

     </Box>
}