import React, {createContext} from 'react'
import {useFormulario} from '../hooks/useFormulario'
import {useTablasGenerales} from '../hooks/useTablasGenerales'

export const formularioContext = createContext()

const Provider = formularioContext.Provider

export const FormularioContextProvider = ({children})=>{ // Exporto el Provider

    const { datos,
            handleChangeCarrera,
            handleChangeCuatrimestre,
            mandarMensaje,
            handleChangePais,
            handleChangeProvincia,
            handleChangeOtroPais,
            handleChangeOtraProvincia,
            handleChangeLocalidad,
            handleChangeDomicilio,
            handleChangeCodPostal,
            handleChangeApellido,
            handleChangeDocumento,
            handleChangeNombre,
            handleChangeNacionalidad,
            handleChangeFechaNac,
            handleChangeSexo,
            handleChangeNivel,
            handleChangeInstrumento,
            handleChangePrograma,
            handleChangeHorario,
            handleChangeModalidad,
            handleChangeTelefono,
            handleChangeCelular,
            handleChangeEmail,
            handleChangeInstagram,
            resetearPais,
            resetearProvincia,
            obtenerCodigoPais,
            handleChangeCodInternacional,
            handleChangeCodArea,
            obtenerCodArea,
            obtenerLongitudTelefonoPermitida,
            recuperaProvinciaAnterior,
            datosPersonalesOK,nacionalidad,sexo,
            datosUbicacionOK,
            setNacionalidadArgentina,
            handleChangeOtraNacionalidad,
            resetearNacionalidad,
            handleChangeTipoDoc,
            errorMail,
            datosContactoOK,
            datosFinalesOK,
            cerrar,procesando,
            handleChangeCarreras,
            handleChangeTipoTarjeta,
            handleChangeTarjeta,
            datosPagoOK,error,codigoFinal,limpiarError,finalizar,reiniciar,imprimir} = useFormulario()

    const { mensaje,
            provincias,
            paises,
            cargando,
            instrumentos,
            nacionalidades,
            horarios,
            cuatrimestres,
            modalidades,
            programas,
            niveles,
            sexos,
            tiposdoc,
            carreras,
            error:errorTablasGenerales} = useTablasGenerales()

    const errorIntegrado = errorTablasGenerales ? errorTablasGenerales : error ? error : null
    // En el value de Provider va todo lo que deseo compartir con los children
    return <Provider value={{datos,
                             paises,
                             provincias,
                             instrumentos,
                             nacionalidades,
                             cargando,
                             handleChangeCarrera,
                             handleChangeCuatrimestre,
                             mandarMensaje,
                             mensaje,
                             handleChangePais,
                             handleChangeProvincia,
                             handleChangeOtroPais,
                             handleChangeOtraProvincia,
                             handleChangeLocalidad,
                             handleChangeDomicilio,
                             handleChangeCodPostal,
                             handleChangeApellido,
                             handleChangeDocumento,
                             handleChangeNombre,
                             handleChangeNacionalidad,
                             handleChangeFechaNac,
                             handleChangeSexo,
                             handleChangeNivel,
                             handleChangeInstrumento,
                             handleChangePrograma,
                             handleChangeHorario,
                             handleChangeModalidad,
                             handleChangeTelefono,
                             handleChangeCelular,
                             handleChangeEmail,
                             handleChangeInstagram,
                             resetearPais,
                             resetearProvincia,
                             obtenerCodigoPais,
                             handleChangeCodInternacional,
                             handleChangeCodArea,
                             obtenerCodArea,
                             obtenerLongitudTelefonoPermitida,
                             recuperaProvinciaAnterior,datosPersonalesOK,
                             nacionalidad,sexo,
                             datosUbicacionOK,
                             setNacionalidadArgentina,
                             handleChangeOtraNacionalidad,
                             handleChangeTipoDoc,
                             resetearNacionalidad,
                             errorMail,
                             datosContactoOK,
                             datosFinalesOK,finalizar,cerrar,procesando,
                             handleChangeCarreras,
                             horarios,
                             cuatrimestres,
                             modalidades,
                             programas,
                             niveles,
                             sexos,
                             tiposdoc,
                             carreras,
                             handleChangeTipoTarjeta,
                             handleChangeTarjeta,
                             datosPagoOK,
                             error:errorIntegrado,
                             codigoFinal,limpiarError,reiniciar,imprimir}}> 
        <div>
            {children}
        </div>
    </Provider>
}
