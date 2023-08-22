import React, {useContext} from 'react'
import {TextField, Button, Box ,Switch,FormGroup,FormControlLabel,Select,makeStyles ,InputLabel,MenuItem,FormControl,RadioGroup,Radio,FormLabel} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import {Nivel} from './Nivel'

export const Instrumento = ()=>{
    const { datos,
            instrumentos,
            cargando,handleChangeInstrumento} = useContext(formularioContext)

    const useStyle = makeStyles({
        select: {
            background: 'white',
            color:'black',
            minWidth:'200px'
        }
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}> 
                <FormControl>
                        {/*<FormLabel id="demo-radio-buttons-group-label">Seleccioná un instrumento</FormLabel>
                        */}
                        <Select
                            labelId="lb-instrumento"
                            id="sl-instrumento"
                            value={datos.instrumento}
                            label="Instrumento"
                            onChange={handleChangeInstrumento}
                            className={classes.select}
                        >
                            <MenuItem value={-1} disabled>Elige un instrumento</MenuItem>
                            {instrumentos.map(item=>{
                                return <MenuItem value={item.id_instrumento}>{item.nombre}</MenuItem>
                            })}

                        </Select>
                </FormControl>
            </Box>
}