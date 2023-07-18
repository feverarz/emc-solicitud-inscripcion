import React, {useContext} from 'react'
import {TextField, Button, Box ,Switch,FormGroup,FormControlLabel,Select,makeStyles ,InputLabel,MenuItem,FormControl,RadioGroup,Radio,FormLabel} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const EnviarDatos = ()=>{
    const { datos,
            cargando} = useContext(formularioContext)

    const useStyle = makeStyles({
        select: {
            background: 'white',
            color:'black'
        }
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'300px' }}> 
                <FormControl>
                <div>
              <p title={JSON.stringify(datos)} style={{whiteSpace:'pre-wrap',wordWrap:'break-word'}}>ver datos</p>
        </div> 
                </FormControl>
            </Box>
}