import React, { useContext, useState, useEffect } from 'react'
import { Box, Link } from "@mui/material/";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { formularioContext } from '../../../contextos/FormularioContext'
import InputLabel from '@mui/material/InputLabel';
import {MenuItem} from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const BuscarAlumno = ({ setEsReingresante, setIniciarFormulario }) => {

    const { datos,
        handleChangeTipoDoc, tiposdoc,
        handleChangeDocumento,
        verificarAlumnoExistente, alumnoNuevo, setAlumnoNuevo } = useContext(formularioContext)
        const [longitudDoc,setLongitudDoc]= useState(0)

    useEffect(() => {
        if (tiposdoc.length > 0) {
            const tipodocumento = tiposdoc.filter(item => item.id_insc_tipodoc === datos.tipo_doc)
            setLongitudDoc(tipodocumento[0]?.longitud)
        }
    }, [datos.tipo_doc, tiposdoc])

    useEffect(() => {
        if (!alumnoNuevo && datos.documento) setIniciarFormulario(true)
    }, [alumnoNuevo])

    function volver() {
        setEsReingresante(null)
        setAlumnoNuevo(false)
    }

    return <>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <Box sx={{minWidth:'150px'}}>
                <FormControl fullWidth >
                    <InputLabel style={{ textAlign: 'left' }} id="lbl-tipo-doc">Tipo de documento</InputLabel>
                    <Select 
                        labelId="select-label-tipodoc"
                        id="sl-tipodoc"
                        value={datos.tipo_doc}
                        label="Tipo de documento"
                        onChange={handleChangeTipoDoc}
                        sx={{width:'100%'}}
                    >
                        {tiposdoc.map(item => {
                            return <MenuItem key={item.nombre} value={item.id_insc_tipodoc}>{item.nombre}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <TextField
                    id="search-alumno"
                    value={datos.documento}
                    onChange={handleChangeDocumento}
                    placeholder='Nro. Documento'
                    InputProps={{
                        maxLength: longitudDoc,
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                            
                                aria-label="toggle password visibility"
                                onClick={() => 
                                    verificarAlumnoExistente(datos.tipo_doc,datos.documento)}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </Box>
        </Box>
        { alumnoNuevo &&

        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert color='error' severity="error">
                No existe un alumno con ese dni, intenta con otro DNI o vuelve al <Link  
                    sx={{ cursor: 'pointer' }}
                    value={''} 
                    onClick={() => volver()}>
                    inicio
                    </Link> para crear una inscripcion nueva
            </Alert>
        </Stack>
        }
    </> 
}