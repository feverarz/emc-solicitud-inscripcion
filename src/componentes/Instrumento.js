import React, {useContext} from 'react'
import { Box, Select, makeStyles, MenuItem, FormControl } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

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