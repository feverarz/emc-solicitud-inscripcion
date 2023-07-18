
import React, {useContext, useEffect, useRef,useState} from 'react'
import {Card,Box,
        CardActions,LinearProgress,Typography,
        CardContent,CardHeader } from "@material-ui/core";
import { TitleOutlined } from '@mui/icons-material';
import {useHelper} from '../hooks/useHelper'
import Alert from '@mui/material/Alert';

export const GenericCard = ({titulo,children,id,mostrar,error,mensajeError,dobleMensajeError,noHacerScroll,subtitulo})=>{
    const {hacerScroll} = useHelper()
    const [activarLoading,setActivarLoading] =useState(false)

    useEffect(()=>{
        if(mostrar && !noHacerScroll){
            setActivarLoading(true)
            setTimeout(() => {
                hacerScroll(id)
            }, 500);
            setTimeout(() => {
                setActivarLoading(false)
            }, 1500);
        }
    }
    ,[mostrar])

if (!mostrar){
    return null
}

return <>
    <Card variant='outlined'>
        <CardHeader id={id} title={titulo}
                    titleTypographyProps={{
                        variant: "h6",
                        align: "left"
                        ,color:'primary'
                        }}
        /> 
        {activarLoading && <Box sx={{ width: '100%' }}>
            <Typography variant='body2'>{titulo}</Typography>
            <LinearProgress title='Cargando'/>
        </Box>}
        {subtitulo && <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{subtitulo}</Typography>}
        {error &&  dobleMensajeError && <Alert severity="error">{mensajeError}</Alert>}
        <CardContent>
            {children}
        </CardContent>
        <CardActions>
        </CardActions>
    </Card>
    {error && <Alert sx={{pb:'5rem',justifyContent:'center'}} severity="error">{mensajeError}</Alert>}
</>
}