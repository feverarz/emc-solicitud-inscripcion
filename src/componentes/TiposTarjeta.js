import React, {useContext} from 'react'
import { FormControlLabel, FormControl, RadioGroup, Radio, Box } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const TiposTarjeta = ()=>{
    const { datos, handleChangeTipoTarjeta } = useContext(formularioContext)

    return <><Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}> 

    <Box sx={{}}>
        <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={datos.tipo_tarjeta}
                    onChange={handleChangeTipoTarjeta}>
                        <FormControlLabel value="CREDITO" control={<Radio />} label="VISA Crédito"/>
                        <FormControlLabel value="DEBITO" control={<Radio />} label="VISA Débito"/>
                </RadioGroup>
        </FormControl>
    </Box>
</Box>
</>
}