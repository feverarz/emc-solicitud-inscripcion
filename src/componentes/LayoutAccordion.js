import React, { useState, useContext }  from 'react'
import { Typography,  Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'
import { Carrera } from './Carrera'
import { Cuatrimestre } from './Cuatrimestre'
import { Programa } from './Programa'
import { Ubicacion } from './Ubicacion'
import { Modalidad } from './Modalidad'
import { Horario } from './Horario'
import { Instrumento } from './Instrumento'
import { Comenzar } from './Comenzar'
import { Nivel } from './Nivel'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export const LayoutAccordion = ()=>{
    const { cargando } = useContext(formularioContext)

    if (cargando) {
        return <p>Cargando...</p>
    }

    return <div style={{display:'flex'}}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Ingresa tus datos personales</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Comenzar/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Selecciona una carrera</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Carrera/>
                            </AccordionDetails>
                        </Accordion>                          

                    </td>
                </tr>
                <tr>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>¿Cuál es tu intrumento principal?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Instrumento/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>¿Evaluamos tu nivel primero?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Nivel/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Elegí un programa</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Programa/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Elegí una modalidad de cursado</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Modalidad/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Elegí un cuatrimestre para cursar</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Cuatrimestre/>
                            </AccordionDetails>
                        </Accordion>
                    </td>    
                    <td>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Elegí tu horario preferencial</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Horario/>
                            </AccordionDetails>
                        </Accordion>
                    </td>
                </tr>
                <tr>
                    <td>    
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Cargá los datos de tu lugar de residencia </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Ubicacion/>
                            </AccordionDetails>
                        </Accordion>               
                        </td>
                    </tr>
            </tbody>
        </table>            
        </div>

}