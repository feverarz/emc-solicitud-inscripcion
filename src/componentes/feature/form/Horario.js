import React, {useContext} from 'react'
import { FormControlLabel, FormControl, RadioGroup, Radio, Tooltip, Box } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'

export const Horario = ()=>{
    const { datos, horarios, handleChangeHorario } = useContext(formularioContext)

    return <>
    <Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left' }}> 
        <Box>  
            <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        color='secondary'
                        value={datos.horario}
                        onChange={handleChangeHorario}>
                            {horarios.map(item=> <Tooltip placement="right-start" title={item.descripcion} arrow>
                                <FormControlLabel value={item.id_insc_horario} control={<Radio color='secondary' />} label={item.nombre} />
                            </Tooltip>)}
                    </RadioGroup>
            </FormControl>
        </Box>
    </Box>
</>    

}