import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from "@mui/material";

const Formulario = () => {
const [direccionCorrecta, setDireccionCorrecta] = useState(false);
const handleDireccionCorrectaChange = (event) => {
    setDireccionCorrecta(event.target.value === 'si');
  };

  return (
    <form>
      <div>
      <h2>Domicilio donde vive</h2>
        <TextField label="Clave Elector" fullWidth />
        <TextField label="Nombre(S)" fullWidth />
        <TextField label="Ampellido Paterno" fullWidth />
        <TextField label="Apellido Materno" fullWidth />
        <TextField label="Fecha de nacimiento" fullWidth />
        <FormControl fullWidth>
          <InputLabel>Sexo</InputLabel>
          <Select>
            <MenuItem value="opcion1">Hombre</MenuItem>
            <MenuItem value="opcion2">Mujer</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Estado de Nacimiento</InputLabel>
          <Select>
            <MenuItem value="opcion3">Durango</MenuItem>
            <MenuItem value="opcion4">Jalisco</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <h2>Domicilio donde vive</h2>
        <TextField label="Calle" fullWidth />
        <TextField label="Numero Ext." fullWidth />
        <TextField label="Numero Int" fullWidth />
<FormControl fullWidth>
          <InputLabel>Municipio donde Vive</InputLabel>
          <Select>
            <MenuItem value="opcion5">Saltillo</MenuItem>
            <MenuItem value="opcion6">Pueblo Nuevo</MenuItem>
          </Select>
        </FormControl>
<FormControl fullWidth>
          <InputLabel>Localidad</InputLabel>
          <Select>
            <MenuItem value="opcion7">Caminos</MenuItem>
            <MenuItem value="opcion8">Sanjuan</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Colonia" fullWidth />
        <TextField label="C.P" fullWidth />
        <TextField label="Seccion Vota" fullWidth />
        <TextField label="Telefono Celular" fullWidth />
        <TextField label="Telefono Fijo" fullWidth />
        <TextField label="Telefono Mensajes" fullWidth />
        <FormControl component="fieldset">
          <FormLabel component="legend">¿La direccion de credencial de elector y donde vive son la misma?</FormLabel>
          <RadioGroup
            aria-label="direccionCorrecta"
            name="direccionCorrecta"
            value={direccionCorrecta ? 'si' : 'no'}
            onChange={handleDireccionCorrectaChange}
            
          >
            <FormControlLabel value="no" control={<Radio />} label="Sí" />
            <FormControlLabel value="si" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        
      </div>
     
     
      {direccionCorrecta && (
        
        <div>
          <h2>Capture información de la credencial de elector</h2>
          <TextField label="Calle" fullWidth />
          <TextField label="Num. Ext." fullWidth />
          <TextField label="Num. Int." fullWidth />

         <FormControl fullWidth>
            <InputLabel>Municipio Vota</InputLabel>
            <Select>
              <MenuItem value="opcion9">SanMarcos</MenuItem>
              <MenuItem value="opcion10">Victoria</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Localidad</InputLabel>
            <Select>
              <MenuItem value="opcion11">Revolucion</MenuItem>
              <MenuItem value="opcion12">Hernandez</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Colonia" fullWidth />
          <TextField label="C.P" fullWidth />
        </div>
      )}

            <Button variant="contained" color="secondary" onClick={""} style={{  marginTop: '5px' }}>
              Limpiar
            </Button>

            <Button variant="contained" color="secondary" onClick={""} style={{ marginLeft: '5px', marginTop: '5px' }} >
              Guardar
            </Button>
        </form>
  );
};

export default Formulario;
