import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@material-ui/core';
import { formularioContext } from '../../../contextos/FormularioContext';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });



export const TicketPago = () => {
    const { setComprobantePago, comprobantePago } = useContext(formularioContext)


    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setComprobantePago(file);
        } else {
        console.warn('Por favor, selecciona un archivo PDF.');
        }
    };

    const deleteFile = () => {
        setComprobantePago(null)
    }

    return (
        <>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Subir comprobante
                <VisuallyHiddenInput onChange={handleChange} type="file" />
                
            </Button>
            {comprobantePago && 
            <Box sx={{ display:'flex' }}>
                <p>{comprobantePago.name}</p> <Button variant='text' onClick={deleteFile}>X</Button> 
            </Box>
            }
        </>
    )
}
