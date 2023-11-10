import React, { useState } from 'react'
import { Box, Checkbox, Typography} from "@material-ui/core";
import { Dialogos } from './Dialogos';

export const TerminosCondiciones = (props)=>{
    const [verTerminos,setVerTerminos]= useState(false)
    const { setTerminosCondiciones, terminosCondiciones } = props
    const handleCheck = (e)=>{
        setTerminosCondiciones(e.target.checked)
    }

    return <Box sx={{padding:'50px 0 20px'}}>
            <Typography>Debes leer y aceptar los terminos y condiciones antes de confirmar los datos</Typography>
            <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                <Checkbox  color="primary"  onChange={handleCheck} checked={terminosCondiciones}/>
                
                    He leído y acepto los <span
                        style={{
                            fontWeight: 'bold',
                            display: 'inline-block',
                            cursor: 'pointer',
                            paddingLeft:'4px'
                        }}
                        onClick={() => setVerTerminos(true)}
                    >
                        términos y condiciones
                    </span>
                
            </Box>
            <Dialogos open={verTerminos} 
                    titulo='Términos y condiciones' 
                    procesarResultado={()=>setVerTerminos(false)}
                    >
                        <>
                        <Typography variant="subtitle1">Primer punto</Typography>
                        <Typography variant="subtitle1">Segundo punto</Typography>
                        <Typography variant="subtitle1">Tercer punto</Typography>

                        </>
            </Dialogos>
        </Box>
}