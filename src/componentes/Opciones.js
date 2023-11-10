import React, { useContext } from 'react'
import { Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Opciones = ()=>{
    const { datos,handleChangeCarrera} = useContext(formularioContext)

    return <>
    <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
    </>
}

