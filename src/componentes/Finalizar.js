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
import SendIcon  from '@mui/icons-material/Send';


export const Finalizar = ({deshabilitar})=>{
    const { datos,
            cargando,datosPersonalesOK,sexo,finalizar} = useContext(formularioContext)

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex', flexDirection:'column'}}> 
     
        <Box sx={{marginTop:'2rem'}}>  
            <Button onClick={finalizar} disabled={deshabilitar || false} variant="outlined" color='primary' size='large' endIcon={<SendIcon />}>
                   Enviar la solicitud
            </Button>    
        </Box>

     </Box>
}