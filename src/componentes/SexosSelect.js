import React, {useContext,useState} from 'react'
import { Box, Select, makeStyles, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const SexosSelect = ()=>{
    const { 
        datos,
        sexos,
        handleChangeSexo,
        cargando,
        } = useContext(formularioContext)

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