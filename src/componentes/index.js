/* 

Este archivo lo uso para que en otro componente se puedan importar
Todos los archivos de esta carpeta directamente desde /.componentes

export {Comp1} from './Comp1'
export {Comp2} from './Comp2'
export {Comp3} from './Comp3'

Unifico los imports para simplificar código en en dónde importaría así...

import {Comp1,Comp2,Comp3} from '../componentes'

Al hacer un import directamente de una carpeta se va a buscar el archivo index.js o index.ts para traer
todo lo que se exporta y poder desesctructurarlo 

*/
export {Resumen} from './Resumen'
export {Finalizar} from './Finalizar'
export {DatosPersonales} from './DatosPersonales'
export {Dialogos} from './Dialogos'
export {Carrera} from './Carrera'
export {Instrumento} from './Instrumento'
export {Nivel} from './Nivel'
export {Programa} from './Programa'
export {Modalidad} from './Modalidad'
export {Horario} from './Horario'
export {Cuatrimestre} from './Cuatrimestre'
export {Ubicacion} from './Ubicacion'
export {Telefonos} from './Telefonos'
export {GenericCard} from './GenericCard'
export {TiposTarjeta} from './TiposTarjeta'
export {NumeroTarjeta} from './NumeroTarjeta'
