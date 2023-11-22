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
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            <strong>
                                ESCUELA DE MÚSICA CONTEMPORÁNEA
                            </strong>
                            <br></br>
                            <strong>
                                CONTRATO ARANCELARIO
                            </strong>
                        </Typography>
                        <br></br>
                        <Typography variant='h5'>
                            <strong>
                                Normas Arancelarias
                            </strong>
                        </Typography>
                        <br></br>
                        <Typography variant='h6'>
                            <strong>
                                Generalidades
                            </strong>
                        </Typography>
                        <br></br>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography>
                                La Escuela de Música Contemporánea S.A. (en lo sucesivo EMC) es una institución
                                educativa cuyos únicos ingresos provienen de las matrículas y aranceles que
                                abonan los alumnos por sus estudios.
                                El estudiante se compromete a cumplir con las normativas académicas, así como a
                                abonar las cuotas y reajustes correspondientes a cada Período Lectivo.
                            </Typography>
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 1: Sobre los Aranceles</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 1.1: Aranceles</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Los alumnos de la EMC deberán abonar costos de estudio que comprenden una
                                Matrícula Anual y Cuotas mensuales establecidas en las Normas y Tablas
                                Arancelarias.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 1.2: Tablas Arancelarias</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Las Tablas Arancelarias establecen los importes correspondientes a los costos de
                                estudio y su período de aplicación.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 1.3: Comunicación válida:</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Las Tablas y Normas Arancelarias son comunicadas a los alumnos mediante su
                                incorporación a la página Web de la Escuela: http://www.escuelademusica.org/info/
                                También bajo pedido expreso del alumno a la línea administrativa, vía WhatsApp.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 1.4: Comunicación de las modificaciones</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Las Tablas y Normas Arancelarias podrán ser modificados por la Escuela.
                                Dichas modificaciones podrán ser advertidas en la página Web de la Escuela
                                http://www.escuelademusica.org/info/.
                            </Typography>    
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 1.5: Reserva de Derechos</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                La condición de alumno regular se alcanza – además del cumplimiento del ciclo
                                académico - con el pago de la matrícula y aranceles tal como se informa. La EMC se
                                reserva el derecho de no permitir la prosecución de los estudios, exámenes y de
                                rechazar la entrega de los certificados, constancias, y diplomas a todo alumno que
                                no haya cancelado todas las obligaciones arancelarias que se hayan devengado.
                            </Typography>
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 2: Matrícula</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 2.1:</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Para ser dados de alta como alumno regular, los estudiantes deben abonar una
                                Matrícula, la misma permite crear y actualizar su legajo y debe ser renovada
                                anualmente para mantener la condición de alumno regular.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 2.2: No reembolso de la Matrícula</strong></Typography> 
                            <Typography sx={{margin: '15px 0'}}>
                                El importe abonado por Matrícula de primer año o subsiguientes no es reintegrable
                                en caso de desistimiento o impedimento de cursar.
                            </Typography>    
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 3: Cuotas de Estudio</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 3.1: Obligación de abonar Aranceles de Estudio</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Los alumnos abonarán los Aranceles de Estudio establecidos de acuerdo con los
                                montos y modalidades propios de cada carrera en todo Período Lectivo en que se
                                inscriban en tiempo y forma.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 3.2: Forma de pago de Aranceles</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Los Aranceles de Estudios correspondientes a un Período Lectivo regular se abonan
                                en 5 cuotas. Es decir que corresponderán cinco (5) cuotas mensuales.
                                Dicho Período Lectivo coincide con el 1er. cuatrimestre Marzo-Julio o 2do.
                                Cuatrimestre agosto-diciembre. De cursar ambos ciclos el alumno deberá abonar 10
                                cuotas mensuales (de marzo-diciembre).
                                El valor de cada cuota no será necesariamente igual. En todos los casos será el
                                indicado para la carrera en la Tabla de Aranceles vigente a la fecha de vencimiento
                                de cada cuota en función del número de asignaturas en que se inscribió el
                                alumno.
                                El alumno podrá decidir también abonar en 1 (un) pago adelantado el total del valor
                                correspondiente a su ciclo lectivo con un beneficio de descuento descripto en la
                                Tabla de Aranceles de la Escuela.
                            </Typography>   
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 3.3: Vencimiento de las cuotas</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                Las cuotas mensuales tendrán un régimen de descuento de acuerdo con la fecha de
                                pago descriptos en la Tabla de Aranceles en la Web de la Escuela.
                                Una cuota mensual se considera vencida cuando permanezca impaga pasados 10
                                días corridos del mes siguiente. Luego de dicha instancia, la EMC procederá a la
                                baja del estudiante.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 3.4: Reajuste de los Aranceles</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                La Matrícula Anual, los Aranceles de Estudio y otros gastos (fotocopias,
                                cuadernillos, etc.) podrán ser modificados según las variaciones de costos. Los
                                mismos podrán actualizarse antes o durante cada Período Lectivo.
                            </Typography>
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 4: Interrupción de los Estudios</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 4.1: Interrupción parcial de los estudios</strong></Typography>            
                                
                            <Typography sx={{margin: '15px 0'}}>
                                La interrupción parcial del alumno a sus clases no lo eximirán del pago de los
                                aranceles vigentes, correspondiendo en consecuencia el pago total de las 5 cuotas
                                del Período Lectivo.
                                No obstante, no se devengarán aranceles futuros cuando un alumno haya
                                comunicado de manera formal a la administración de la Escuela su baja total o
                                parcial.
                                El cobro mensual se interrumpirá al mes siguiente del aviso de baja.
                                En caso de que el alumno haya abonado en un (1) pago adelantado el total del
                                cuatrimestre, regirán estas proporciones respecto del reembolso:
                                - Hasta los 10 primeros días del inicio de clase: Se reintegrará un 60 % del total
                                abonado.
                                - Del dia 11 al 20: Se reintegrará un 40 % del total abonado.

                                - Del dia 21 al 30: Se reintegrará un 20 % del total abonado.
                                - Pasados los 30 días del inicio de clases no habrá reintegros.
                            </Typography>
                        </Box>        
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 5: De los Aranceles Menores (Derechos de Exámenes)</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 5.1: Exámenes Recuperatorios y Libres</strong></Typography>
                                
                            <Typography sx={{margin: '15px 0'}}>
                                Las materias no aprobadas durante la cursada regular podrán ser rendidas en
                                instancias de Recuperatorios o Libres abonando el correspondiente Permiso derecho
                                de Examen y de no mediar pagos pendientes.
                            </Typography>  
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 6: Importe de las cuotas según la fecha de pago</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 6.1:</strong></Typography>

                            <Typography sx={{margin: '15px 0'}}>
                                La Escuela establece montos diferentes en sus aranceles de acuerdo con las
                                fechas o modalidades de pago. Los mismos serán comunicados en la página
                                web de la EMC (http://www.escuelademusica.org/info/)
                            </Typography>
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 7: Mora de Pagos</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 7.1:</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}>
                                La falta de pago en término de los Aranceles de Estudio según las fechas de
                                vencimiento establecidas, implicará la Mora automática en los pagos.
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 7.2: Sanciones Administrativas aplicables como consecuencia de la Mora</strong></Typography> 
                            <Typography sx={{margin: '15px 0'}}>
                                Las calificaciones finales no serán informadas a quien registre Mora en sus pagos.
                                No se emitirán Diplomas ni Certificados de Estudios ni se permitirá la reinscripción
                                en caso de que el alumno tenga saldos adeudados por cualquier concepto.
                            </Typography>   
                        </Box>
                        <Box sx={{margin: '20px 0'}}>
                            <Typography sx={{margin: '15px 0'}}><strong>Capítulo 8: Sobre el Pago</strong></Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 8.1: Lugar y medios de pago</strong></Typography>  
    
                            <Typography sx={{margin: '15px 0'}}>
                                Los alumnos deberán realizar sus pagos en la modalidad, lugar y horarios que se
                                indiquen en la página web de la EMC (http://www.escuelademusica.org/info/)
                            </Typography>
                            <Typography sx={{margin: '15px 0'}}><strong>Artículo 8.2: Cobro Automático por Tarjetas o efectivo</strong></Typography>    
                            <Typography sx={{margin: '15px 0'}}>
                                La Escuela ofrece preferentemente el pago automático de los aranceles por Tarjeta
                                de Crédito.
                                La EMC se reserva el derecho de cancelar las opciones de débito automático
                                en cualquier momento.
                                La EMC se reserva el derecho de Exclusión, Admisión y Permanencia
                                Conforme lo expresado en los artículos precedentes en los casos de
                                incumplimiento por parte de los alumnos y/o pérdida de condición de
                                alumno regular, como así también de personal ajeno a esta casa de
                                estudios, la EMC se reserva el derecho de exclusión, admisión y/o
                                permanencia
                            </Typography>    
                        </Box>
                        </>
            </Dialogos>
        </Box>
}