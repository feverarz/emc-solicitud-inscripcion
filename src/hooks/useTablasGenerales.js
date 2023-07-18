import React, { useEffect,useState } from "react"
import Axios from 'axios'

export const useTablasGenerales = ()=>{
    const [mensaje,setMensaje] = useState([])
    const [cargando, setCargando] = useState(false);
    const [provincias,setProvincias] = useState([])
    const [paises,setPaises] = useState([])
    const [instrumentos,setInstrumentos] = useState([])
    const [nacionalidades,setNacionalidades] = useState([])
    const [horarios,setHorarios] = useState([])
    const [cuatrimestres,setCuatrimestres] = useState([])
    const [modalidades,setModalidades] = useState([])
    const [programas,setProgramas] = useState([])
    const [niveles,setNiveles] = useState([])
    const [sexos,setSexos] = useState([])
    const [tiposdoc,setTiposdoc] = useState([])
    const [carreras,setCarreras] = useState([])
    const [error,setError] = useState(null)

   /* const sexos = [{id:'M',nombre:'Hombre'},{id:'F',nombre:'Mujer'}]
    const sexosSelect = [{id:'M',nombre:'Hombre'},
                         {id:'F',nombre:'Mujer'},
                         {id:'NB',nombre:'No binario'},
                         {id:'NR',nombre:'Prefiero no responder'}]*/

    useEffect(()=>{
        const llamarapi =  async ()=>{
            setCargando(true)
            try{
//                const {data} = await Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/testapi':'http://190.111.232.123:5010/api/tablasgenerales/testapi')
                const {data} = await Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/testapi`)
                  
                    setMensaje(data.mensaje)
                    setCargando(false)

            }catch(err){
                setCargando(false)
                setError('Error al cargar datos generales (1)'  + err )
            }
    
        }

        const cargarTablas =  async ()=>{
            setCargando(true)
            try{
                /*const vector = await Promise.all([Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apipaises':'http://190.111.232.123:5010/api/tablasgenerales/apipaises'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apiprovincias/all':'http://190.111.232.123:5010/api/tablasgenerales/apiprovincias/all'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apiinstrumentos':'http://190.111.232.123:5010/api/tablasgenerales/apiinstrumentos'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apinacionalidades':'http://190.111.232.123:5010/api/tablasgenerales/apinacionalidades'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apihorarios':'http://190.111.232.123:5010/api/tablasgenerales/apihorarios'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apicuatrimestres':'http://190.111.232.123:5010/api/tablasgenerales/apicuatrimestres'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apimodalidades':'http://190.111.232.123:5010/api/tablasgenerales/apimodalidades'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apiprogramas':'http://190.111.232.123:5010/api/tablasgenerales/apiprogramas'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apiniveles':'http://190.111.232.123:5010/api/tablasgenerales/apiniveles'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apisexos':'http://190.111.232.123:5010/api/tablasgenerales/apisexos'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apitiposdoc':'http://190.111.232.123:5010/api/tablasgenerales/apitiposdoc'),
                    Axios.get(process.env.NODE_ENV =='development' ? 'http://localhost:3002/api/tablasgenerales/apicarreras':'http://190.111.232.123:5010/api/tablasgenerales/apicarreras')])
                    */
                    const vector = await Promise.all([Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apipaises`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apiprovincias/all`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apiinstrumentos`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apinacionalidades`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apihorarios`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apicuatrimestres`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apimodalidades`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apiprogramas`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apiniveles`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apisexos`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apitiposdoc`),
                    Axios.get(`${process.env.REACT_APP_API_BASE}/api/tablasgenerales/apicarreras`)])
               
                    setProvincias(vector[1].data.map(item=>item.nombre=='NN' ? {...item,nombre:'~ Otra provincia'}:{...item,nombre:item.nombre.trim()}).sort((a,b)=>a.nombre.localeCompare(b.nombre)))
                    setPaises(vector[0].data.map(item=>item.nombre=='NN' ? {...item,nombre:'~ Otro país'}:item).sort((a,b)=>a.nombre.localeCompare(b.nombre)))
                    setInstrumentos(vector[2].data.filter(item=>item.inscripcion_web==true))
                    setNacionalidades(vector[3].data.filter(item=>!item.nombre.toUpperCase().includes('ARGENT')).map(item=>item.nombre=='NN' ? {...item,nombre:'~ Otra nacionalidad'}:item).sort((a,b)=>a.nombre.localeCompare(b.nombre)))
                                                        // quité la nacionalidad argentina porque se identifica con el switch
                    setHorarios(vector[4].data)
                    setCuatrimestres(vector[5].data)
                    setModalidades(vector[6].data)
                    setProgramas(vector[7].data)
                    setNiveles(vector[8].data)
                    setSexos(vector[9].data)
                    setTiposdoc(vector[10].data)
                    setCarreras(vector[11].data)

               }catch(err){
                setCargando(false)
                setError('Error al cargar datos generales (2)' + err)
            }
    
        }

        llamarapi()
        cargarTablas()
    },[])

    return {mensaje,
            cargando,
            provincias,
            paises,
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
            error}
}