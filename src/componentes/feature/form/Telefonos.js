import React, {useContext, useEffect, useRef,useState} from 'react'
import {
        TextField, 
        Box,
        makeStyles ,
        InputAdornment 
      } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'

export const Telefonos = ()=>{
    const { datos,
            handleChangeTelefono,
            handleChangeTelefonoEmergencia,
            handleChangeCelular,
            handleChangeEmail,
            handleChangeInstagram,
            cargando,
            obtenerCodigoPais,
            obtenerCodArea,
            handleChangeCodInternacional,
            obtenerLongitudTelefonoPermitida,
            handleChangeCodArea,
            errorMail
          } = useContext(formularioContext)


    const useStyle = makeStyles({
        prefijos:{
            color:'#948b8b',
            fontWeight:'400',
            fontStyle:'italic'
        }
      });

    const classes = useStyle();

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Box sx={{display:'flex', flexDirection:'column'}}> 
        {datos.pais==0 && datos.otroPais.trim()!='' && <Box sx={{marginTop:'1rem'}}>
            <TextField helperText='Por ejemplo +54 para Argentina'
                                  InputProps={{
                                    startAdornment: <InputAdornment className={classes.prefijos} position="start">+</InputAdornment>,
                                  }} 
            fullWidth id="con-codint" autofocus inputProps={{maxLength: 3}} value={datos.cod_internacional} onChange={handleChangeCodInternacional} label={`Código internacional del país ${datos.otroPais}`} />
        </Box>}
        <Box sx={{marginTop:'1rem'}}>
            <TextField  helperText='Por ejemplo 11 para Capital Federal' fullWidth id="con-codlocal" autofocus inputProps={{maxLength: 4}} value={datos.cod_area} onChange={handleChangeCodArea} label="Código de área local" />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="con-telefono" 
                     autofocus
                     name='telefono'
                     placeholder='Tu número de teléfono fijo'
                      InputProps={{
                        startAdornment: <InputAdornment className={classes.prefijos} position="start">+{obtenerCodigoPais()} {obtenerCodArea()}</InputAdornment>,
                      }}
            inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} value={datos.telefono} onChange={handleChangeTelefono} label="Teléfono fijo"  />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField  fullWidth id="con-celular" 
                        name='celular'
                        placeholder='Tu número de celular'
                      InputProps={{
                        startAdornment: <InputAdornment  className={classes.prefijos} position="start">+{obtenerCodigoPais()} {obtenerCodArea()}</InputAdornment>,
                      }}
            inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} value={datos.celular} onChange={handleChangeCelular} label="Número de celular" />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="con-telefonoEmergencia" 
                     autofocus
                     name='telefonoEmergencia'
                     placeholder='Un número de teléfono de emergencia de algún familiar'
                      InputProps={{
                        startAdornment: <InputAdornment className={classes.prefijos} position="start">+{obtenerCodigoPais()} {obtenerCodArea()}</InputAdornment>,
                      }}
            inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} value={datos.telefono_emergencia} onChange={handleChangeTelefonoEmergencia} label="Teléfono emergencia"  />
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="con-email" type="email" inputProps={{maxLength: 200}} placeholder="nombre@ejemplo.com" value={datos.email} onChange={handleChangeEmail} label="E-mail" />
            {errorMail() && <p style={{color:'red'}}>{errorMail()}</p>}
        </Box>
        <Box sx={{marginTop:'1rem'}}>
            <TextField fullWidth id="outlined-basic" inputProps={{maxLength: 200}} value={datos.instagram} onChange={handleChangeInstagram} 
            label="Perfil de instagram"
            InputProps={{
                startAdornment: <InputAdornment position="start">@</InputAdornment>,
              }}
            />
        </Box>
     </Box>
}

