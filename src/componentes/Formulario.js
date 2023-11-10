import React, { useContext }  from 'react'
import { formularioContext } from '../contextos/FormularioContext'
import { LayoutCards } from './LayoutCards'
import { Container } from '@mui/material';


export const Formulario = ()=>{
    const { cargando  } = useContext(formularioContext)

    
    if (cargando) {
        return <p>Cargando...</p>
    }

    return <Container
            maxWidth={false} 
            sx={{
                borderRadius: '4px',
                paddingTop:'3rem',
                backgroundColor: '#ffe4ca',
            }}>
        
            <LayoutCards/>
        </Container>

}