import React, { useContext } from 'react'
import { FormControlLabel, FormControl, RadioGroup, Radio, Box, Tooltip } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'


export const Modalidad = ()=>{
    const { datos, modalidades, handleChangeModalidad } = useContext(formularioContext)

        return <>
        <Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left'}}> 
            <Box>
                <FormControl>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={datos.modalidad}
                            onChange={handleChangeModalidad}>
                                {modalidades.map(item=> <Tooltip placement="right-start" title={item.descripcion} arrow>
                                    <FormControlLabel value={item.id_insc_modalidad} control={<Radio color='secondary' />} label={item.nombre} />
                                </Tooltip>)}
                        </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    </>
}