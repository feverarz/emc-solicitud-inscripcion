import React, {useContext} from 'react'
import {FormControlLabel,FormControl,RadioGroup,Radio,FormLabel,Box,Tooltip} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'


export const Modalidad = ()=>{
    const { datos,modalidades,
        handleChangeHorario,
        handleChangeModalidad} = useContext(formularioContext)

        return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'start', justifyContent:'left'}}> 
        <Box sx={{}}>
            <FormControl>
                    {/*<FormLabel id="demo-radio-buttons-group-label">Modalidad preferencial de cursado</FormLabel>
                    */}
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

    return <><Box sx={{ display:'flex',flexDirection:'column',alignItems:'center' }}> 
            <Box sx={{}}>
                <FormControl>
                        {/*<FormLabel id="demo-radio-buttons-group-label">Modalidad preferencial de cursado</FormLabel>
                        */}
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={datos.modalidad}
                            onChange={handleChangeModalidad}>
                                <Tooltip placement="right-start" title="Cursada presencial en Mitre 1352 (CABA)" arrow>
                                    <FormControlLabel value="P" control={<Radio />} label="Presencial" />
                                </Tooltip>
                                <Tooltip sx={{ color: 'primary.main' }} placement="right-start" title="Cursada virtual en plataforma online" arrow>
                                    <FormControlLabel value="O" control={<Radio />} label="Online" />
                                </Tooltip>
                                <Tooltip sx={{ color: 'primary.main' }} placement="right-start" title="Cursada presencial y online" arrow>
                                    <FormControlLabel value="M" control={<Radio />} label="Mixta" />
                                </Tooltip>
                        </RadioGroup>
                </FormControl>
            </Box>
        </Box>
        </>
}