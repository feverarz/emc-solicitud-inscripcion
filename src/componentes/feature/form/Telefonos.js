import React, { useContext } from 'react'
import {
        TextField, 
        Box,
        makeStyles ,
        InputAdornment 
      } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'

export const Telefonos = ()=>{
    
  const { 
          datos,
          handleChangeTelefono,
          handleChangeTelefonoEmergencia,
          handleChangeCelular,
          handleChangeEmail,
          handleChangeInstagram,
          cargando,
          obtenerCodigoPais,
          handleChangeCodInternacional,
          obtenerLongitudTelefonoPermitida,
          handleChangeCodArea,
          errorMail,
          handleChangeCodAreaEmergencia,
          codAreaEmergencia,
          handleChangeCodAreaCelular,
          codAreaCelular

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

    // cod area debe solo
    // handleChangeTelefonoEmergencia y handleChangeCelular van a recibir dos inputs y concatenarse
    // el metodo del onchange tiene que concatenar cod area y telefono y enviar al handlechange el cual debe recibir un string y no un evento


    return ( 
    <Box sx={{display:'flex', flexDirection:'column'}}> 
        <Box>
          <Box 
            sx={{
              marginTop:'1rem', 
              display:'flex', 
              width:'100%',
              justifyContent:'space-between',
              alignItems:'flex-end'
              }}
            >
              {datos.pais===0 && datos.otroPais.trim()!=='' && 
                <TextField 
                  helperText='Por ejemplo +54 para Argentina'
                  InputProps={{
                    startAdornment: <InputAdornment className={classes.prefijos} position="start">+</InputAdornment>,
                  }} 
                  id="con-codint" 
                  autofocus 
                  inputProps={{maxLength: 3}} 
                  value={datos.cod_internacional} 
                  onChange={handleChangeCodInternacional} 
                  label={`Código internacional del país ${datos.otroPais}`}
                />
              }
              <Box sx={{marginTop:'1rem'}}>
                <TextField  
                  // helperText='Por ejemplo 11 para Capital Federal'  
                  id="con-codlocal" 
                  autofocus 
                  inputProps={{maxLength: 4}} 
                  value={datos.cod_area} 
                  onChange={handleChangeCodArea} 
                  label="Cód. de área" 
                  InputProps={{
                    startAdornment: <InputAdornment className={classes.prefijos} position="start"> +{obtenerCodigoPais()} </InputAdornment>,
                  }}
                  style={{width:'100px', paddingRight:'10px '}}
                  placeholder='XX'
                  />
              </Box>
              <Box sx={{marginTop:'1rem', width:'100%'}}>
                <TextField 
                  fullWidth
                  id="con-telefono" 
                  name='telefono'
                  // autofocus
                  placeholder='Tu número de teléfono fijo'
                  InputProps={{
                    startAdornment: <InputAdornment  className={classes.prefijos} position="start"></InputAdornment>,
                  }}
                  inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} 
                  value={datos.telefono} 
                  onChange={handleChangeTelefono} 
                  style={{width:'100%'}}
                  label="Teléfono fijo con número de area"  
                />
              </Box>
          </Box>
        </Box>
        <Box 
            sx={{
              marginTop:'1rem', 
              display:'flex', 
              width:'100%',
              justifyContent:'space-between',
              alignItems:'flex-end'
              }}
            >
          <Box sx={{marginTop:'1rem'}}>
            <TextField  
              id="con-codlocal" 
              autofocus 
              inputProps={{maxLength: 4}} 
              value={codAreaCelular} 
              onChange={handleChangeCodAreaCelular} 
              label="Cód. de área" 
              InputProps={{
                startAdornment: <InputAdornment className={classes.prefijos} position="start"> + </InputAdornment>,
              }}
              style={{width:'100px', paddingRight:'10px '}}
              placeholder='54 XX'
              />
          </Box>
          <Box sx={{marginTop:'1rem', width:'100%'}}>
            <TextField  
              fullWidth id="con-celular" 
              name='celular'
              placeholder='Tu número de celular'
              InputProps={{
                startAdornment: <InputAdornment  className={classes.prefijos} position="start"></InputAdornment>,
              }}
              inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} 
              value={datos.celular} 
              onChange={handleChangeCelular} 
              label="Número de celular" 
              
            />
          </Box>
        </Box>
        <Box 
          sx={{
            marginTop:'1rem', 
            display:'flex', 
            width:'100%',
            justifyContent:'space-between',
            alignItems:'flex-end'
            }}
          >
          <Box sx={{marginTop:'1rem'}}>
            <TextField  
              id="con-codlocal" 
              autofocus 
              inputProps={{maxLength: 4}} 
              value={codAreaEmergencia} 
              onChange={handleChangeCodAreaEmergencia} 
              label="Cód. de área" 
              InputProps={{
                startAdornment: <InputAdornment className={classes.prefijos} position="start"> + </InputAdornment>,
              }}
              style={{width:'100px', paddingRight:'10px '}}
              placeholder='54 XX'
              />
          </Box>

          <Box sx={{marginTop:'1rem', width:'100%'}}>
              <TextField 
                fullWidth id="con-telefonoEmergencia" 
                autofocus
                name='telefonoEmergencia'
                placeholder='Un número de teléfono de emergencia de algún familiar'
                InputProps={{
                  startAdornment: <InputAdornment className={classes.prefijos} position="start"></InputAdornment>,
                }}
                inputProps={{maxLength:obtenerLongitudTelefonoPermitida(), required:true}} 
                value={datos.telefono_emergencia} 
                onChange={handleChangeTelefonoEmergencia} 
                label="Teléfono emergencia"
              />
          </Box>
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
    )
}

