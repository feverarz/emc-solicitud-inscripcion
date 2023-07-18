import React, {useContext} from 'react'
import { FormControlLabel,FormControl,RadioGroup,Radio,FormLabel,Tooltip,Box} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Cuatrimestre = ()=>{
    const { datos,handleChangeCuatrimestre,cuatrimestres} = useContext(formularioContext)

    return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}> 

    <Box sx={{}}>
        <FormControl>
                {/*<FormLabel id="demo-radio-buttons-group-label">Cuatrimestre</FormLabel>
                */}
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={datos.cuatrimestre}
                    onChange={handleChangeCuatrimestre}>
                        {cuatrimestres.map(item=><FormControlLabel value={item.id_insc_cuatrimestre} control={<Radio />} label={item.nombre}/>)}
                </RadioGroup>
        </FormControl>
    </Box>
</Box>
</>
}