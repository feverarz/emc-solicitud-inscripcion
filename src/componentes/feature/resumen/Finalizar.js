import React, { useContext } from 'react'
import { 
        Button, 
        Box
    } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'
import SendIcon  from '@mui/icons-material/Send';


export const Finalizar = ({deshabilitar})=>{
    const { cargando, finalizar } = useContext(formularioContext)

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