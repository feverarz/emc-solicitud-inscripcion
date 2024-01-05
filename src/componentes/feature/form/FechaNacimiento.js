import React from "react";
import { TextField  } from "@material-ui/core";

export const FechaNacimiento = ({titulo,fecha,setFecha})=>{

  return (
    <TextField 
      fullWidth
      variant="outlined" 
      label={titulo}
      type="date"
      onChange={(event) => {setFecha(event.target.value)
      }}
      value={fecha} // siempre debe venir en formato yyyy-mm-dd
      InputLabelProps={{
        shrink: true
      }}
      name="Fechanacimiento"
    />
  )
}

