import React, { useContext } from 'react'
import { FormControlLabel, FormGroup, Checkbox, Box } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'

export const Carrera = ()=>{
    const { datos, handleChangeCarreras, carreras } = useContext(formularioContext)

    return <Box sx={{display:'flex',justifyContent:'left'}}><FormGroup>
        {carreras.map(item=><FormControlLabel control={<Checkbox color="secondary" name={item.id_carrera} checked={datos.carreras.some(aux=>aux===item.id_carrera)} onChange={handleChangeCarreras} />} label={item.descripcion}/>)}
    </FormGroup>
    </Box>
}