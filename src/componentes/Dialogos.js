import React, {useContext} from 'react'
import {TextField,Button,DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog} from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Dialogos = ({open,procesarResultado,titulo,children,texto,procesarCancelar,error,textoAceptar,fullscreen})=>{
    const {datos,handleChangeCarrera} = useContext(formularioContext)
  
    return     <div>
    <Dialog fullScreen={fullscreen || false} open={open || false} onClose={procesarResultado}>
      <DialogTitle style={{textAlign:fullscreen ? 'center' : ''}}>{titulo}</DialogTitle>
      <DialogContent style={{textAlign:fullscreen ? 'center' : ''}}>
        <DialogContentText>
            {texto}
        </DialogContentText>
        {children}
        {error && <p style={{color:'red'}}>{error}</p>}
      </DialogContent>
      <DialogActions>
        {procesarCancelar && <Button onClick={procesarCancelar}>Cancelar</Button>}
        {procesarResultado && <Button variant="outlined" color='primary' onClick={procesarResultado}>{textoAceptar ? textoAceptar : 'Aceptar'}</Button>}
      </DialogActions>
    </Dialog>
  </div>
}