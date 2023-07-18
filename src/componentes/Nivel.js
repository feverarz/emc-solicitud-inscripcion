import React, {useContext} from 'react'
import {FormControlLabel,FormControl,RadioGroup,Radio,FormLabel,Box,Tooltip} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'


export const Nivel = ()=>{
    const { datos,handleChangeNivel,niveles} = useContext(formularioContext)

    return <Box sx={{ }}> 
            <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={datos.nivel}
                        onChange={handleChangeNivel}>
                            {niveles.map(item=> <Tooltip placement="right-start" title={item.descripcion} arrow>
                                <FormControlLabel value={item.id_insc_nivel} control={<Radio />} label={item.nombre} />
                            </Tooltip>)}
                    </RadioGroup>
            </FormControl>
        </Box>
}