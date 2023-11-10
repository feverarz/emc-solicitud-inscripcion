import React, {useContext} from 'react'
import { Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from "@material-ui/core";
import { formularioContext } from '../contextos/FormularioContext'

export const Dialogos = ({estadoInicial=false,procesarResultado,titulo,children,texto,procesarCancelar})=>{
    const {datos,handleChangeCarrera} = useContext(formularioContext)
    const [open, setOpen] = React.useState(estadoInicial);
    const [error,setError] = React.useState(null)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleAcept = () => {
     procesarResultado()
      .then(()=>setOpen(false))
      .catch(err=>setError(err))    
      
    };

    const handleCancel = () => {
      procesarCancelar()
      .then(()=>setOpen(false))
    };

    return     <div>
    <Dialog open={open} onClose={handleAcept}>
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText>
            {texto}
        </DialogContentText>
        {children}
        {error && <p style={{color:'red'}}>{error}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleAcept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  </div>
}