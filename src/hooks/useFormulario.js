import { useState } from "react"
import Axios from 'axios'
import { useTablasGenerales } from "./useTablasGenerales"
import { useHelper } from '../hooks/useHelper'

const regex_solo_numeros = /^[0-9\b]+$/;
const regex_visa = /^4[0-9]{12}(?:[0-9]{3})?$/;


const objetoInicial = {
    carreras:[],
    cuatrimestre:-1,
    pais:1, 
    provincia:1,
    otroPais:'',
    otraProvincia:'',
    localidad:'',
    domicilio:'',
    codpostal:'',
    nombre:'',
    apellido:'',
    tipo_doc:1,
    documento:'',
    sexo:-1,
    nacionalidad:4, // argentino
    fecha_nac:'',
    instrumento:-1,
    nivel:-1,
    programa:-1,
    horario:-1,
    modalidad:-1,
    telefono:'',
    celular:'',
    telefono_emergencia:'',
    email:'',
    instagram:'',
    cod_area:11,
    cod_internacional:54,
    provinciaAnterior:'',
    otraNacionalidad:'',
    tipo_tarjeta:'',
    nro_tarjeta:''
}

export const useFormulario = ()=>{
    const { esFechaValida, verificarSiFechaEsPosteriorNanios, verificarSiFechaEsAnteriorNanios, validarEmail } = useHelper()

    const { paises, provincias, tiposdoc, sexos, nacionalidades } = useTablasGenerales()
    const [ datos, setDatos ] = useState(objetoInicial)
    const [ error, setError ] = useState(null)
    const [ codigoFinal, setCodigoFinal ] = useState(null)
    const [ alumnoNuevo, setAlumnoNuevo ] = useState(null)
    const [ alumnoActivo, setAlumnoActivo ] = useState(false)
    const [ codAreaCelular, setCodAreaCelular ] = useState('')
    const [ codAreaEmergencia, setCodAreaEmergencia ] = useState('')
    const [ comprobantePago, setComprobantePago ] = useState(null)
    
    const resetForm = () => {
        setDatos(objetoInicial)
    }

      const handleChangeCarrera = (event) => {
        setDatos({...datos,carrera:Number(event.target.value)});
      };

      const handleChangeTipoTarjeta = (event) => {
        setDatos({...datos,tipo_tarjeta:event.target.value});
      };

      const handleChangeTarjeta = (event) => {
        const formatoTarjeta = event.target.value.split("").filter(item=>item!==' ').map((item,index)=>{
            const multiploCuatro = index%4
            return multiploCuatro===0 && index>3 ? ` ${item}` : item
        }).join("")

        setDatos({...datos,nro_tarjeta:formatoTarjeta});
      }; 


      const handleChangeCarreras = (event) => {
        const verificarExistencia = datos.carreras.some(item=>item===event.target.name)
        
        if(verificarExistencia){
            const copia = datos.carreras.filter(item=>item!==event.target.name)
            setDatos({...datos,carreras:[...copia]})
        }else{
            setDatos({...datos,carreras:[...datos.carreras,Number(event.target.name)]})
        }
      };

    const handleChangeNivel = (event) => {
    setDatos({...datos,nivel:Number(event.target.value)});
    };

    const handleChangeCuatrimestre = (event) => {
    setDatos({...datos,cuatrimestre:Number(event.target.value)});
    };

    const handleChangeUsuario = (event) => {
        setDatos({...datos,usuario:event.target.value});
    };

    const handleChangePais = (event) => {
        const copia = [...provincias]
        const primerProvincia = copia.filter(item=>item.id_pais===Number(event.target.value)).sort((a,b)=>a.nombre.localeCompare(b.nombre)).map(item=>item.id_provincia)
        setDatos({...datos,
                    pais:Number(event.target.value),
                    provincia:Number(event.target.value)>0 ? primerProvincia[1]:0,
                    otroPais:'',
                    otraProvincia:'',
                    cod_area : codigoAreaSegunPais(Number(event.target.value)),
                    cod_internacional: obtenerCodigoPais(Number(event.target.value))});
    };

    const handleChangeProvincia = (event) => {
        setDatos({...datos,provincia:Number(event.target.value),otraProvincia:Number(event.target.value)>0 ? '' : datos.otraProvincia});
    };

    const handleChangeOtroPais = (event) => {
        setDatos({...datos,otroPais:event.target.value.toUpperCase(),cod_internacional:'',cod_area:''});
    };
    
    const handleChangeOtraProvincia = (event) => {
        setDatos({...datos,otraProvincia:event.target.value.toUpperCase(),cod_area:''});
    };

    const handleChangeOtraNacionalidad = (event) => {
        setDatos({...datos,otraNacionalidad:event.target.value.toUpperCase()});
    };

    const handleChangeTelefono = (event) => {
        if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()==='')
        {
            setDatos({...datos,telefono:event.target.value.trim()==='' ? '' : event.target.value});
        }
    };

    const handleChangeTelefonoEmergencia = (event) => {
        if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()==='')
        {
            setDatos({...datos,telefono_emergencia:event.target.value.trim()==='' ? '' : event.target.value});
        }
    };

    const handleChangeCodAreaEmergencia = (event) => {
        setCodAreaEmergencia(event.target.value.trim())
    }

    const handleChangeCodAreaCelular = (event) => {
        setCodAreaCelular(event.target.value.trim())
    }

    const handleChangeCelular = (event) => {
        if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()==='')
        {
            setDatos({...datos,celular:event.target.value.trim()==='' ? '' : event.target.value});
        } 
    };

    const handleChangeEmail = (event) => {
        setDatos({...datos,email:event.target.value});
    };

    const handleChangeInstagram = (event) => {
        setDatos({...datos,instagram:event.target.value});
    };

    const handleChangeLocalidad = (event) => {
        setDatos({...datos,localidad:event.target.value.toUpperCase()});
    };

    const handleChangeDomicilio = (event) => {
        setDatos({...datos,domicilio:event.target.value.toUpperCase()});
    };

    const handleChangeCodPostal = (event) => {
        setDatos({...datos,codpostal:event.target.value.toUpperCase()});
    };

    const handleChangeNombre = (event) => {
        setDatos({...datos,nombre:event.target.value.toUpperCase()});
    };

    const handleChangeApellido = (event) => {
        setDatos({...datos,apellido:event.target.value.toUpperCase()});
    };

    const handleChangeDocumento = (event) => {
        const tipoDato = tiposdoc.filter(item=>item.id_insc_tipodoc===datos.tipo_doc)[0].tipo

        if(tipoDato==='number'){
            if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()===''){
                setDatos({...datos,documento:event.target.value});
            }
        }else{
            setDatos({...datos,documento:event.target.value.toUpperCase()});
        }
    };

    const handleChangeNacionalidad = (event) => {
        setDatos({...datos,nacionalidad:Number(event.target.value),otraNacionalidad:''});
    };

    const handleChangeInstrumento = (event) => {
        setDatos({...datos,instrumento:Number(event.target.value)});
    };

    const handleChangeFechaNac = (fecha) => {
        setDatos({...datos,fecha_nac:fecha});
    };

    const handleChangeSexo = (event) => {
        setDatos({...datos,sexo:Number(event.target.value)});
    };

    const handleChangeTipoDoc = (event) => {
            setDatos({...datos,tipo_doc:Number(event.target.value),documento:''});
    };

    const handleChangePrograma = (event) => {
        setDatos({...datos,programa:Number(event.target.value)});
    };

    const handleChangeHorario = (event) => {
        setDatos({...datos,horario:Number(event.target.value)});
    };

    const handleChangeModalidad = (event) => {
        setDatos({...datos,modalidad:Number(event.target.value)});
    };

    const handleChangeCodArea = (event) => {
        if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()==='')
            {
                setDatos({...datos,cod_area:event.target.value.trim()==='' ? '' : Number(event.target.value)});
            }
    };

    const setNacionalidadArgentina = (soyArgentino)=>{
        setDatos({...datos,nacionalidad: soyArgentino ? 4 : -1,otraNacionalidad:''})
    }

    const handleChangeCodInternacional = (event) => {
        if(regex_solo_numeros.test(event.target.value.trim()) || event.target.value.trim()==='')
        {
            setDatos({...datos,cod_internacional:event.target.value.trim()==='' ? '' : Number(event.target.value)});
        }
    };

    const codigoAreaSegunPais = (id_pais)=>{
        const paisSeleccionado = paises.filter(item=>item.id_pais===id_pais)

        if(paisSeleccionado[0].nombre.toUpperCase().includes('ARGENTINA')){
                return 11
        }else{
            return ''
        }
    }

    const resetearPais = ()=>{
        setDatos({...datos,pais:1,provincia:1,otroPais:'',otraProvincia:'',cod_internacional:54,cod_area:11})
    }

    const resetearNacionalidad = ()=>{
        setDatos({...datos,nacionalidad:-1,otraNacionalidad:''})
    }

    const resetearProvincia = () => {

        if(datos.pais===0){
            setDatos({...datos,provincia:0,otraProvincia:'',provinciaAnterior:datos.otraProvincia})
        }else{
            const copia = [...provincias]
            const primerProvincia = copia.filter(item=>item.id_pais===datos.pais).sort((a,b)=>a.nombre.localeCompare(b.nombre)).map(item=>item.id_provincia)
            setDatos({...datos,provincia:primerProvincia[1],otraProvincia:''});
        }
       
    };

    const mandarMensaje = async ()=>{
        const objeto = {
            ...datos,
            celular:codAreaCelular + datos.celular,
            telefono_emergencia: codAreaEmergencia + datos.telefono_emergencia,
        }

        try {
//            const {data} = await Axios.post(process.env.NODE_ENV ==='development' ? 'http://localhost:3002/api/tablasgenerales/nuevoalumno' : 'http://190.111.232.123:5010/api/tablasgenerales/nuevoalumno',objeto,{
            const {data} = await Axios.post(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/nuevoalumno`,objeto, {
            headers: {
                  'content-type': 'application/json'
                }})
                return data.codigo
        } catch(err) {
            // aquí capturo el error que viene de axios y lo trae err.response.data 
            // en .data puedo encontrar lo que envío desde el request como json
            // para que la función que llama a esta lo interprete como un error debo forzarlo con throw Error
            // y lo va a recibir en err.message

            // todo: aca podria crear algun flag para informar al front que el alumno existe o que ya está hecha la solicitud
            console.log(err.response)
            throw new Error(err.response.data.codigo)
        }
    }

    const handleComprobantePagoUpload = async () => {
        if (comprobantePago) {
            const formData = new FormData();
            const alumnoData = {
                nombre: datos.nombre,
                apellido: datos.apellido,
                documento: datos.documento
            }
            formData.append('file', comprobantePago);
            formData.append('data', JSON.stringify(alumnoData))
    
            try {
                const response = await Axios.post(`${process.env.REACT_APP_API_BASE}/api/alumnos/comprobantepago`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                return response.data
            } catch (error) {
                console.error('Error al subir el archivo:', error);
            }
        } else {
          console.warn('No se ha seleccionado ningún archivo.');
        }
    }

    const obtenerCodigoPais = (id_pais)=>{
        const pais = id_pais ? id_pais : datos.pais

        if (pais===0){
            return datos.cod_internacional
        }

        const filter = paises.filter(item=>item.id_pais===pais).map(item=>item.cod_telefonico)
        return filter[0] ? filter[0] : 0
    }

    const obtenerCodArea = ()=>{
        return Number(datos.cod_area)
    }

    const obtenerLongitudTelefonoPermitida = ()=>{
        return 15 - (Number(datos.cod_area.toString().length) + (Number(obtenerCodigoPais().toString().length)))
    }

    const recuperaProvinciaAnterior = ()=>{
        if(datos.pais===0){
            setDatos({...datos,otraProvincia:datos.provinciaAnterior});
        }else{
            const copia = [...provincias]
            const primerProvincia = copia.filter(item=>item.id_pais===datos.pais).sort((a,b)=>a.nombre.localeCompare(b.nombre)).map(item=>item.id_provincia)
            setDatos({...datos,provincia:primerProvincia[1],otraProvincia:''});
        }
    }

    async function verificarAlumnoExistente(tipo_doc, dni) {

        try{
            const { data } = await Axios.get(`${process.env.REACT_APP_API_BASE}/api/alumnos/verificar-dni/${dni}`)

            if (data.Existe) {
                setDatos({...datos,documento:dni, tipo_doc:tipo_doc});
                setAlumnoNuevo(false)
            } 
            if (!data.Existe) setAlumnoNuevo(true) 
            if (data.Existe && data.Activo) {
                setAlumnoActivo(true)
            }
            if (data.Existe && !data.Activo) {
                alert('alumno inactivo comunicate con la escuela por favor.') 
            }
            return data

        }catch(err){
            console.log(err)
            alert('2 Tenemos un problema de conexión. Por favor intentá más tarde o comunicate con la escuela')
        }


    }

    const datosPersonalesOK = ()=>{


        if(datos.nombre.trim()===''){
             return [false,'Falta completar tu nombre']
        }

        if(datos.apellido.trim()===''){
            return [false,'Falta completar tu apellido']
        }

        if(datos.tipo_doc===-1){
            return [false,'Falta completar el tipo de documento']
        }
       
       if(datos.documento.trim()===''){
        return [false,'Falta completar tu número de documento']
    }

       if(datos.documento.trim().length < 7){
        return [false,'El número de documento debe ser al menos de 7 caracteres']
    }

       if(datos.nombre.trim().length < 3){
        return [false,'El nombre ingresado parece ser demasiado corto (tiene menos de 3 caracteres)']
    }

       if(datos.apellido.trim().length < 3){
        return [false,'El apellido ingresado parece ser demasiado corto (tiene menos de 3 caracteres)']
    }

    if(datos.nacionalidad===-1){
        return [false,'Falta seleccionar tu nacionalidad']
    }

    if(datos.nacionalidad===69 && datos.otraNacionalidad.trim()===''){
        return [false,'Falta seleccionar tu nacionalidad']
    }

        if(datos.fecha_nac?.toString().trim()===''){
            return [false,'Falta completar tu fecha de nacimiento']
        }

        if(!esFechaValida(datos.fecha_nac)){
            return [false,'La fecha de nacimiento ingresada no es válida']
        }
        
        if(verificarSiFechaEsPosteriorNanios(5,datos.fecha_nac)){
            return [false,'La fecha de nacimiento ingresada no es válida o es demasiado reciente']
        }

        if(verificarSiFechaEsAnteriorNanios(90,datos.fecha_nac)){
            return [false,'La fecha de nacimiento ingresada no es válida o es demasiado antigua']
        }

        if(datos.sexo===-1){
            return [false,'Falta seleccionar el campo sexo']
        }

        return [true,null]
    }

    const datosUbicacionOK = ()=>{


        if(datos.domicilio.trim()===''){
             return [false,'Falta completar tu domicilio']
        }

        if(datos.localidad.trim()===''){
            return [false,'Falta completar tu localidad']
        }
       
       if(datos.codpostal.trim()===''){
        return [false,'Falta completar el código postal']
        }

       if(datos.domicilio.trim().length < 5){
        return [false,'El domicilio debe ser al menos de 5 caracteres']
        }
        
        if(datos.localidad.trim().length < 5){
            return [false,'La localidad debe ser al menos de 5 caracteres']
        }

        if(datos.codpostal.trim().length < 4){
            return [false,'El código postal debe ser al menos de 4 caracteres']
        }

        if(datos.pais<1 && datos.otroPais.trim()===''){
            return [false,'Falta ingresar el nombre del nuevo país']
        }

        if(datos.pais<1 && datos.otraProvincia.trim()===''){
            return [false,'Falta ingresar el nombre de la nueva provincia']
        }

        if(datos.provincia<1 && datos.otraProvincia.trim()===''){
            return [false,'Falta ingresar el nombre de la nueva provincia']
        }

        if(datos.pais>0 && datos.otroPais.trim()!==''){
            return [false,'El valor del campo Otro país no es compatible con el país seleccionado']
        }

        if(datos.provincia>0 && datos.otraProvincia.trim()!==''){
            return [false,'El valor del campo Otra provincia no es compatible con la provincia seleccionada']
        }

        return [true,null]
    }

    const datosContactoOK = ()=>{

       if(datos.pais===0 && (Number(datos.cod_internacional))===0){
            return [false,`Falta completar el código internacional para el pais ${datos.otroPais}`]
       }

       if(Number(datos.cod_area)===0){
            return [false,'Falta completar el código telefónico de área local']
       }

        if(datos.telefono.trim()===''){
             return [false,'Falta completar tu número de teléfono']
        }

        if (datos.telefono.length > obtenerLongitudTelefonoPermitida()){
            return [false,`El número de teléfono fijo ingresado es demasiado largo (Máximo:15 números)`]
        }

        if(datos.celular.trim()===''){
            return [false,'Falta completar tu número de celular']
        }
       
        if (datos.celular.length > obtenerLongitudTelefonoPermitida()){
            return [false,`El número de celular ingresado es demasiado largo (Máximo:15 números)`]
        }

       if(datos.email.trim()===''){
        return [false,'Falta completar tu correo electrónico']
        }

        if(!validarEmail(datos.email)){
            return [false,'El e-mail ingresado parece ser inválido']
        }

        return [true,null]
    }

    const nacionalidad = ()=>{
        return nacionalidades.filter(item=>item.id_nacionalidad===datos.nacionalidad).map(item=>item.nombre)
    }

    const sexo = ()=>{
        return sexos.filter(item=>item.id===datos.sexo).map(item=>item.nombre)
    }

    const errorMail = ()=>{
        if(validarEmail(datos.email) || datos.email.trim()===''){
            return null
        }else{
            return 'El e-mail ingresado parece incorrecto'
        }
    }

    const datosFinalesOK = ()=>{
        if(!datosPersonalesOK()[0]){
            return datosPersonalesOK()
        }

        if(!datosUbicacionOK()[0]){
            return datosUbicacionOK()
        }

        if(!datosContactoOK()[0]){
            return datosContactoOK()
        }

        if(datos.carreras.length===0){
            return [false,'Falta elegir una carrera']
        }

        if(datos.horario===-1){
            return [false,'Falta elegir un horario']
        }

        if(datos.programa===-1){
            return [false,'Falta elegir un programa']
        }

        if(datos.cuatrimestre===-1){
            return [false,'Falta elegir un cuatrimestre']
        }

        if(datos.nivel===-1){
            return [false,'Falta elegir un nivel']
        }

        if(datos.nivel===-1){
            return [false,'Falta elegir un nivel']
        }

        if(datos.modalidad===-1){
            return [false,'Falta elegir una modalidad']
        }

        if(!datos.instrumento || datos.instrumento===-1){
            return [false,'Falta seleccionar un intrumento']
        }

        return [true,'']

    }

    const datosPagoOK = ()=>{
        if(!datosFinalesOK()[0]){
            return datosFinalesOK()
        }

        if(datos.tipo_tarjeta.trim()===''){
            return [false,'Falta completar el tipo de tarjeta']
            }

        if(datos.nro_tarjeta.trim()===''){
            return [false,'Falta completar el número de tarjeta']
        }

        if(datos.nro_tarjeta.trim().length<16){
            return [false,'El número de tarjeta debe ser de 16 dígitos']
        }


        if(!regex_visa.test(datos.nro_tarjeta.replace(/\s/g,"").trim())){
            return [false,'El número de tarjeta debe ser VISA']
        }

        return [true,'']

    }

    const finalizar = async ()=>{
        setError(null)
        await handleComprobantePagoUpload();
        mandarMensaje()
        .then(codigo=>{
            setCodigoFinal(codigo)
        })
        .catch(err=>{
            console.log(err?.message, err?.name, err?.response)
            setError(err.message) // aquí capturo el error desde err.message porque lo generé desde la función mandarMensaje con un thrown Error, allí el error lo catchee desde axios y viene en err.response.data, en data viene lo que tiene el json, pero para que lo capture la función que lo llamó tengo que forzar un error porque no lo interpreta como tal,no lo toma en el catch aunque vino con un error 500
        })
    }

    const limpiarError = ()=>{
        setError(null)
    }

    const reiniciar =()=>{
        setDatos(objetoInicial)
        setError(null)
        setCodigoFinal(null)
    }

    const imprimir = async ()=>{
        try{
            const {data} = await Axios.get(process.env.NODE_ENV === 'development' ? 'http://localhost:3002/api/tablasgenerales/apiimpresion':'http://190.111.232.123:5010/api/tablasgenerales/apiimpresion')
            const primero = data.blob()

            const pdfBlob = new Blob([primero], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);

            return pdfUrl;

        }catch(err){
            console.log(err)
            alert('2 Tenemos un problema de conexión. Por favor intentá más tarde o comunicate con la escuela')
        }

    }

    return {
            datos,
            setDatos,
            handleChangeCarrera,
            handleChangeCuatrimestre,
            mandarMensaje,
            handleChangeUsuario,
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
            handleChangeInstrumento,
            handleChangeNivel,
            handleChangePrograma,
            handleChangeHorario,
            handleChangeModalidad,
            handleChangeTelefono,
            handleChangeTelefonoEmergencia,
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
            datosPersonalesOK,
            nacionalidad,sexo,
            datosUbicacionOK,
            setNacionalidadArgentina,
            handleChangeOtraNacionalidad,
            handleChangeTipoDoc,
            resetearNacionalidad,
            errorMail,
            datosContactoOK,
            datosFinalesOK,
            finalizar,
            handleChangeCarreras,
            handleChangeTipoTarjeta,
            handleChangeTarjeta,
            datosPagoOK,
            error,
            codigoFinal,
            reiniciar,
            imprimir,
            limpiarError,
            verificarAlumnoExistente,
            alumnoNuevo, 
            setAlumnoNuevo, 
            alumnoActivo,
            resetForm,
            handleChangeCodAreaEmergencia,
            codAreaEmergencia,
            handleChangeCodAreaCelular,
            codAreaCelular,
            setComprobantePago,
            comprobantePago 
        }
}

