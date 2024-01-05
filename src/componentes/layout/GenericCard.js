
import React, { useEffect, useRef,useState} from 'react'
import { Card, Box, CardActions, LinearProgress, Typography, CardContent, CardHeader } from "@material-ui/core";
import {useHelper} from '../../hooks/useHelper'
import Alert from '@mui/material/Alert';

export const GenericCard = ({titulo,children,id,mostrar,error,mensajeError,dobleMensajeError,noHacerScroll,subtitulo})=>{
    const { hacerScroll } = useHelper();
    const [activarLoading, setActivarLoading] = useState(false);
  
    const isMounted = useRef(true);
  
    useEffect(() => {
      isMounted.current = true;
  
      if (mostrar && !noHacerScroll) {
        setActivarLoading(true);
        setTimeout(() => {
          hacerScroll(id);
        }, 500);
  
        setTimeout(() => {
          if (isMounted.current) {
            setActivarLoading(false);
          }
        }, 1500);
      }
  
      return () => {
        isMounted.current = false;
      };
    }, [mostrar]);

if (!mostrar){
    return null
}

return <>
    <Card sx={{ borderRadius:'0px'}} elevation={0}>
        <CardHeader id={id} title={titulo}
                    titleTypographyProps={{
                        variant: "h6",
                        align: "left"
                        ,color:'primary'
                        }}
        /> 
        {activarLoading && <Box sx={{ width: '100%' }}>
            <Typography variant='body2'>{titulo}</Typography>
            <LinearProgress title='Cargando' color='secondary'/>
        </Box>}
        {subtitulo && <Typography sx={{ fontSize: 14 }} align='left' gutterBottom>{subtitulo}</Typography>}
        {error &&  dobleMensajeError && <Alert severity="error">{mensajeError}</Alert>}
        <CardContent>
            {children}
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
    {error && <Alert sx={{justifyContent:'center'}} variant="outlined" severity="error">{mensajeError}</Alert>}
</>
}