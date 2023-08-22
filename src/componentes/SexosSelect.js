import React, {useContext,useState} from 'react'
import {TextField, Grid, Box ,Switch,FormGroup,FormControlLabel,Select,makeStyles ,InputLabel,MenuItem,FormControl,RadioGroup,Radio,FormLabel} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import {Nacionalidad} from '../componentes/Nacionalidad'
import {Sexo} from '../componentes/Sexo'
import {Fecha} from '../componentes/Fecha'
import {useHelper} from '../hooks/useHelper'

export const SexosSelect = ()=>{
    const { datos,
        handleChangeTipoDoc,sexos,
        handleChangeSexo,cargando,
        datosPersonalesOK} = useContext(formularioContext)

    const useStyle = makeStyles({
        selectpais: {
            background:datos.pais > 0 ? 'white' : 'gray',
            color:'black',
            textAlign:'left'
        },
        selectprovincia: {
            background:datos.provincia > 0 ? 'white' : 'gray',
            color:'black'
        },
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{marginTop:'1rem'}}>
                    <FormControl fullWidth>
                    <InputLabel style={{textAlign:'left'}} id="lbl-sexo">Sexo</InputLabel>
                        {/*<InputLabel id="demo-simple-select-label" color="secondary" variant='outlined'>País</InputLabel>*/}
                        <Select fullWidth
                            labelId="select-label-sexo"
                            id="sl-sexo"
                            value={datos.sexo}
                            label="Sexo"
                            onChange={handleChangeSexo}
                            className={classes.selectpais}
                        >
                            {sexos.map(item=>{
                                return <MenuItem key={item.nombre} value={item.id_insc_sexo}>{item.nombre}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
}