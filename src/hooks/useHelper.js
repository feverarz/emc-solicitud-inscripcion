import React from 'react'
import moment from 'moment';

export const useHelper = ()=>{

     function obtenerFechaDiamenosN(n,format){
        const hoy = new moment()
        const startdate = hoy.subtract(n, 'days');
        const desglose = {dia:startdate.date(),mes:startdate.month()+1,anio:startdate.year()}
        if (format){
            return {diamenosn:startdate.format(format),desglose,date:startdate.toDate()}
        }else{
            return {diamenosn:startdate.format('DD-MM-YYYY'),desglose,date:startdate.toDate()}
        }
    }

     function fechaCambioFormato(fecha,formato_destino){

        const fecha_aux = moment(fecha);
    
        return fecha_aux.format(formato_destino)
    }

    function verificarSiFechaEsPosteriorNanios(n,fechaavalidar){
        const hoy = new moment()
        const startdate = hoy.subtract(n, 'years');
        const fecha = new moment(fechaavalidar,)
        return fecha.isAfter(startdate)
    }

    function verificarSiFechaEsAnteriorNanios(n,fechaavalidar){
        const hoy = new moment()
        const startdate = hoy.subtract(n, 'years');
        const fecha = new moment(fechaavalidar)
        return fecha.isBefore(startdate)
    }

    function esFechaValida(fechaavalidar){

        const fecha = new moment(fechaavalidar)
        return fecha.isValid(fechaavalidar)
    }

    
    function hacerScroll(id){
        let element = document.getElementById(id);
        if(element){
            element.scrollIntoView();
        }
    }

    function validarEmail(email){
 
        //http://www.regular-expressions.info/email.html
         const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
         
         return re.test(String(email).toLowerCase().trim());
    }

    return {obtenerFechaDiamenosN,
            verificarSiFechaEsPosteriorNanios,
            esFechaValida,
            verificarSiFechaEsAnteriorNanios,
            fechaCambioFormato,
            hacerScroll,
            validarEmail}
}