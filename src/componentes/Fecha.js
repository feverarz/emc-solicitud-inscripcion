
import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import esLocale from 'date-fns/locale/es';
import { Box  } from "@material-ui/core";

export const Fecha = ({titulo,fecha,setFecha})=>{

    return <Box sx={{marginTop:'1rem',textAlign:'left'}} >
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
                <DatePicker 
                    label={titulo}
                    value={fecha}
                    onChange={(newValue) => {
                        setFecha(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
    </Box>
}