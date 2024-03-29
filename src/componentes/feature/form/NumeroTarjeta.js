import React, { useContext } from 'react'
import { TextField, Box } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'

export const NumeroTarjeta = ()=>{
    const { datos, handleChangeTarjeta } = useContext(formularioContext)

    const filterKeys = (e)=>{

        if (!/[0-9]/.test(e.key)) {
            if(!(e.key==='Backspace' || e.key==='Delete')){
                e.preventDefault();
            }
        }
    }

    return <>
    <Box sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}> 
        {datos.tipo_tarjeta && <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="ub-tarjeta" onKeyDown={filterKeys} inputProps={{maxLength: 19,placeholder:'XXXX XXXX XXXX XXXX'}} value={datos.nro_tarjeta} onInput={handleChangeTarjeta} label="Número de tarjeta" variant="filled" />
        </Box>}
    </Box>
    </>
}