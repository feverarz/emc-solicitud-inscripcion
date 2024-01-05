import React, { useContext, useState } from 'react'
import {Button, 
        Box,
        Divider,
        Grid,
        Typography
     } from "@material-ui/core";
import { formularioContext } from '../../../contextos/FormularioContext'
import { useHelper } from '../../../hooks/useHelper'
import Checkcon  from '@mui/icons-material/Check';
import { TerminosCondiciones } from '../../feature/resumen/TerminosCondiciones';

export const Resumen = ({confirmarDatos})=>{
    const { datos, provincias, paises, carreras, instrumentos, niveles, programas, modalidades, horarios, cuatrimestres, tiposdoc, nacionalidades, sexos } = useContext(formularioContext)
    const {fechaCambioFormato} = useHelper()
    const [terminosCondiciones, setTerminosCondiciones] = useState(false)

    return <Box sx={{display:'flex', flexDirection:'column'}}> 
                   <Divider />

          <Grid container style={{borderBottom:'solid 1px'}}>
               <Grid item xs={4}>
                    <Typography variant="caption">Nombre</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.apellido}, {datos.nombre}</Typography>
               </Grid>  
               <Grid item xs={4}>
                    <Typography variant="caption">Documento</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">( {funcionDescripcion(tiposdoc,datos.tipo_doc,'id_insc_tipodoc')} ) {datos.documento}</Typography>
               </Grid>  
               <Grid item xs={4}>
                    <Typography variant="caption">Nacionalidad</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">
                              {funcionDescripcion(nacionalidades,datos.nacionalidad,'id_nacionalidad',function(){
                                   if(datos.nacionalidad==4){
                                        return 'Argentina'
                                   }
                              })}
                    </Typography>
               </Grid>   
               <Grid item xs={4}>
                    <Typography variant="caption">Fecha de nacimiento</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{fechaCambioFormato(datos.fecha_nac,'DD/MM/YYYY')}</Typography>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Sexo</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(sexos,datos.sexo,'id_insc_sexo')} </Typography>
               </Grid>    
          </Grid>

          <Grid container style={{borderBottom:'solid 1px'}}>
               <Grid item xs={4}>
                    <Typography variant="caption">Domicilio</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.domicilio}</Typography>
               </Grid>  
               <Grid item xs={4}>
                    <Typography variant="caption">Localidad</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.localidad}</Typography>
               </Grid>  
               <Grid item xs={4}>
                    <Typography variant="caption">Código postal</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.codpostal}</Typography>
               </Grid>               
               <Grid item xs={4}>
                    <Typography variant="caption">Provincia</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{describirProvincia(datos,provincias)}</Typography>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">País</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{describirPais(datos,paises)} </Typography>
               </Grid>    
          </Grid>
          <Grid container style={{borderBottom:'solid 1px'}}>
               <Grid item xs={4}>
                    <Typography variant="caption">Teléfono</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">+{datos.cod_internacional}-{datos.cod_area}-{datos.telefono}</Typography>
               </Grid>  
               <Divider light />
               <Grid item xs={4}>
                    <Typography variant="caption">Celular</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
               <Typography variant="subtitle1">+{datos.cod_internacional}-{datos.cod_area}-{datos.celular}</Typography>
               </Grid>  
               <Grid item xs={4}>
                    <Typography variant="caption">E-mail</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.email}</Typography>
               </Grid>               
               <Grid item xs={4}>
                    <Typography variant="caption">Instagram</Typography>
               </Grid> 
               <Grid item xs={8}  style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{datos.instagram}</Typography>
               </Grid> 
          </Grid>
          <Grid container>
               <Grid item xs={4}>
                    <Typography variant="caption">Carrera</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant='subtitle1' >{funcionDescripcionCarrera(carreras,datos.carreras)}</Typography>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Instrumento</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(instrumentos,datos.instrumento,'id_instrumento')}</Typography>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Nivel</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(niveles,datos.nivel,'id_insc_nivel')}</Typography>
                    <Box style={{background:'lightBlue'}}>
                         <Typography variant='caption' color='textSecondary'>{funcionDetalles(niveles,datos.nivel,'id_insc_nivel')}</Typography>
                    </Box>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Programa</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(programas,datos.programa,'id_insc_programa')}</Typography>
                    <Box className="desc-detalles">
                         <Typography variant='caption' color='textSecondary'>{funcionDetalles(programas,datos.programa,'id_insc_programa')}</Typography>
                    </Box>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Modalidad</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(modalidades,datos.modalidad,'id_insc_modalidad')}</Typography>
                    <Box className="desc-detalles">
                         <Typography variant='caption' color='textSecondary'>{funcionDetalles(modalidades,datos.modalidad,'id_insc_modalidad')}</Typography>
                    </Box>
               </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Cuatrimestre</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(cuatrimestres,datos.cuatrimestre,'id_insc_cuatrimestre')}</Typography>
                </Grid> 
               <Grid item xs={4}>
                    <Typography variant="caption">Horario</Typography>
               </Grid> 
               <Grid item xs={8} style={{textAlign:'left'}}>
                    <Typography variant="subtitle1">{funcionDescripcion(horarios,datos.horario,'id_insc_horario')}</Typography>
                    <Box className="desc-detalles">
                         <Typography variant='caption' color='textSecondary'>{funcionDetalles(horarios,datos.horario,'id_insc_horario')}</Typography>
                    </Box>
               </Grid> 
          </Grid>    
               {/* aca van los terminos y condiciones, 'acepta los terminos y condiciones y luego confirma los datos */}
          <TerminosCondiciones setTerminosCondiciones={setTerminosCondiciones} terminosCondiciones={terminosCondiciones}></TerminosCondiciones>
           <Box sx={{marginTop:'2rem'}}>  
               <Button onClick={confirmarDatos} disabled={!terminosCondiciones} variant="outlined" color='primary' size='large' endIcon={<Checkcon />}>
                    Los datos son correctos
               </Button>    
          </Box>

     </Box>
}

const funcionDescripcion =(array,id,clave,callback)=>{
     const registrosEncontrados = array.filter(item=>item[clave]==id)
     if (registrosEncontrados.length > 0){
          return  array.filter(item=>item[clave]==id)[0]?.nombre 
     }else{
          if(callback){
               return callback()
          }else{
               return 'El dato es incorrecto'
          }
     }
}

const funcionDetalles =(array,id,clave)=>{
     const registrosEncontrados = array.filter(item=>item[clave]==id)
     if (registrosEncontrados.length > 0){
         
          const detalle =  array.filter(item=>item[clave]==id)[0]?.descripcion 

          if(detalle){
               return detalle
          }else{
               return null
          }
     }
}

const funcionDescripcionCarrera =(carreras,carrerasSeleccionadas)=>{
     return  carrerasSeleccionadas.map(item=>carreras.filter(aux=>aux.id_carrera==item)[0].descripcion).join(' / ')
}

const describirPais = (datos,paises)=>{
     if(datos.pais>0){
          const paisEncontrado = paises.filter(item=>item.id_pais==datos.pais)
               return  paisEncontrado[0]?.nombre 
     }else{
          return datos.otroPais
     }
}

const describirProvincia = (datos,provincias)=>{

     if(datos.provincia>0){
          const provinciaEncontrada = provincias.filter(item=>item.id_provincia==datos.provincia)
          return  provinciaEncontrada[0]?.nombre 
     }else{
          return datos.otraProvincia
     }
}
