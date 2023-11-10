import React, { useContext } from 'react'
import { FormControlLabel, FormControl, RadioGroup, Radio, Box, Tooltip } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'


export const Programa = ()=>{
    const { datos, handleChangePrograma, programas } = useContext(formularioContext)

    return <>
        <Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left' }}> 
            <Box sx={{}}>
                <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={datos.programa}
                            onChange={handleChangePrograma}>
                                {programas.map(item=> <Tooltip placement="right-start" title={<>{item.descripcion}</>} arrow>
                                    <FormControlLabel value={item.id_insc_programa} control={<Radio color='secondary' />} label={item.nombre} />
                                </Tooltip>)}
                        </RadioGroup>
                </FormControl>
            </Box>
        </Box>
        </>
}