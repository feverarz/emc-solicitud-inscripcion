import React, { useEffect,useState,useContext } from "react"

import { formularioContext } from '../contextos/FormularioContext'


export const useCards = ()=>{

    const { datos,
        cargando,
        datosPersonalesOK,
        datosUbicacionOK,
        datosContactoOK,
        datosFinalesOK,
        datosPagoOK,
        error,
        limpiarError,
        codigoFinal,
        finalizar,reiniciar,imprimir} = useContext(formularioContext)

    return {datos,
            cargando,
            datosPersonalesOK,
            datosUbicacionOK,
            datosContactoOK,
            datosFinalesOK,
            datosPagoOK,
            error,
            limpiarError,codigoFinal,
            finalizar,reiniciar,imprimir}
}