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
export {Resumen} from './feature/resumen/Resumen'
export {Finalizar} from './feature/resumen/Finalizar'
export {DatosPersonales} from './feature/form/DatosPersonales'
export {Dialogos} from './feature/form/Dialogos'
export {Carrera} from './feature/form/Carrera'
export {Instrumento} from './feature/form/Instrumento'
export {Nivel} from './feature/form/Nivel'
export {Programa} from './feature/form/Programa'
export {Modalidad} from './feature/form/Modalidad'
export {Horario} from './feature/form/Horario'
export {Cuatrimestre} from './feature/form/Cuatrimestre'
export {Ubicacion} from './feature/form/Ubicacion'
export {Telefonos} from './feature/form/Telefonos'
export {GenericCard} from './layout/GenericCard'
export {NumeroTarjeta} from './feature/form/NumeroTarjeta'
export {TerminosCondiciones} from './feature/resumen/TerminosCondiciones'