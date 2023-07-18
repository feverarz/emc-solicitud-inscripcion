import React, {useContext} from 'react'
import {TextField, Button, Box ,Switch,FormGroup,FormControlLabel,Select,makeStyles ,InputLabel,MenuItem,FormControl,RadioGroup,Radio,FormLabel} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Sexo = ()=>{
    const { datos,
            sexos,
            cargando,handleChangeSexo} = useContext(formularioContext)

    const useStyle = makeStyles({
        select: {
            background: 'white',
            color:'black'
        },
        radioButtonSexo:{
            display:'flex',
            flexDirection:'row'
        }
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{marginTop:'1rem',textAlign:'left',marginBottom:'1rem'}}>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={datos.sexo}
                className={classes.radioButtonSexo}
                onChange={handleChangeSexo}>
                    <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="F" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="NB" control={<Radio />} label="No binario" />
                    <FormControlLabel value="NR" control={<Radio />} label="Prefiero no responder" />
            </RadioGroup>
        </FormControl>
    </Box>

    return <Box sx={{marginTop:'1rem'}}> 
                <FormControl fullWidth>
                        {/*<FormLabel id="demo-radio-buttons-group-label">Seleccioná un género</FormLabel>*/}
                        <Select
                            fullWidth
                            labelId="lb-sexo"
                            id="sl-sexo"
                            value={datos.sexo}
                            label="Sexo"
                            onChange={handleChangeSexo}
                            className={classes.select}
                            title='Sexo'
                        >
                            <MenuItem disabled value={-1}>Selecciona un sexo</MenuItem>
                            {sexos.map(item=>{
                                return <MenuItem value={item.id}>{item.nombre}</MenuItem>
                            })}

                        </Select>
                </FormControl>
            </Box>
}