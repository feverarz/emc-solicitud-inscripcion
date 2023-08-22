import React, {useContext} from 'react'
import {FormControlLabel,FormControl,RadioGroup,Radio,FormGroup,Checkbox,Box} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Carrera = ()=>{
    const { datos,handleChangeCarrera,handleChangeCarreras,carreras} = useContext(formularioContext)

    return <Box sx={{display:'flex',justifyContent:'left'}}><FormGroup>
        {carreras.map(item=><FormControlLabel control={<Checkbox color="secondary" name={item.id_carrera} checked={datos.carreras.some(aux=>aux==item.id_carrera)} onChange={handleChangeCarreras} />} label={item.descripcion}/>)}
    </FormGroup>
    </Box>

    return <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={datos.carrera}
                    onChange={handleChangeCarrera}>
                        <FormControlLabel value="mp" control={<Radio />} label="Músico profesional" />
                        <FormControlLabel value="pm" control={<Radio />} label="Producción musical" />
                </RadioGroup>
        </FormControl>
}