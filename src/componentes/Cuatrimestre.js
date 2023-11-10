import React, {useContext} from 'react'
import { FormControlLabel, FormControl, RadioGroup, Radio, Box } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Cuatrimestre = ()=>{
    const { datos, handleChangeCuatrimestre, cuatrimestres } = useContext(formularioContext)

    return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left' }}> 

    <Box sx={{}}>
        <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={datos.cuatrimestre}
                    onChange={handleChangeCuatrimestre}>
                        {cuatrimestres.map(item=><FormControlLabel value={item.id_insc_cuatrimestre} control={<Radio color='secondary' />} label={item.nombre}/>)}
                </RadioGroup>
        </FormControl>
    </Box>
</Box>
</>
}