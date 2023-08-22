import React, {useContext} from 'react'
import { FormControlLabel,FormControl,RadioGroup,Radio,FormLabel,Tooltip,Box} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Horario = ()=>{
    const { datos,horarios,handleChangeHorario} = useContext(formularioContext)

    return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left' }}> 

    <Box>
        
        <FormControl>
                {/*<FormLabel id="demo-radio-buttons-group-label">Horario preferencial de cursado</FormLabel>
                 */}
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

    return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}> 

    <Box>
        <FormControl>
                {/*<FormLabel id="demo-radio-buttons-group-label">Horario preferencial de cursado</FormLabel>
                 */}
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={datos.horario}
                    onChange={handleChangeHorario}>
                        <Tooltip placement="right-start" title="10 a 14 hs." arrow>
                            <FormControlLabel value="M" control={<Radio />} label="Mañana" />
                        </Tooltip>
                        <Tooltip sx={{ color: 'primary.main' }} placement="right-start" title="14 a 18 hs." arrow>
                            <FormControlLabel value="T" control={<Radio />} label="Tarde" />
                        </Tooltip>
                        <Tooltip sx={{ color: 'primary.main' }} placement="right-start" title="18 a 21.30 hs." arrow>
                            <FormControlLabel value="N" control={<Radio />} label="Noche" />
                        </Tooltip>
                </RadioGroup>
        </FormControl>
    </Box>
</Box>
</>
}