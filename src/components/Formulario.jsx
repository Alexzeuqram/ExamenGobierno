import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Button, 
} from "@mui/material";

const registros = [
 
  { nombre: "TEST TEST", responsabilidad: "Sin responsabilidad", municipio: "ABASOLO", seccion: "20" },
  { nombre: "María", municipio: "ABASOLO", seccion: "21" },
  { nombre: "Pedro", municipio: "JERECUARO", seccion: "22" },
  { nombre: "Pedro", municipio: "JERECUARO", seccion: "23" },
  { nombre: "Pedro", responsabilidad: "Si", municipio: "JERECUARO", seccion: "24" },

];

const BuscadorRegistros = () => {
    const [nombre, setNombre] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [seccion, setSeccion] = useState("");
    const [resultadosFiltrados, setResultadosFiltrados] = useState(registros);
    const [limpiarBusqueda, setLimpiarBusqueda] = useState(false); 
    const [ setRegistroSeleccionado] = useState(null); 
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
      filtrarRegistros(event.target.value, municipio, seccion);
    };
  
    const handleMunicipioChange = (event) => {
      setMunicipio(event.target.value);
      filtrarRegistros(nombre, event.target.value, seccion);
    };
  
    const handleSeccionChange = (event) => {
      setSeccion(event.target.value);
      filtrarRegistros(nombre, municipio, event.target.value);
    };
  
    const handleLimpiarBusqueda = () => {
      setNombre("");
      setMunicipio("");
      setSeccion("");
      setLimpiarBusqueda(true);
    };
  
    const handleRegistroClick = (registro) => {
      setRegistroSeleccionado(registro);
    };
  
    const filtrarRegistros = (nombre, municipio, seccion) => {
      const resultadosFiltrados = registros.filter((registro) => {
        
        if (limpiarBusqueda) return true;
  
        const nombreMatches = registro.nombre.toLowerCase().includes(nombre.toLowerCase());
        const municipioMatches = registro.municipio.toLowerCase().includes(municipio.toLowerCase());
        const seccionMatches = registro.seccion.includes(seccion);
  
        return nombreMatches && municipioMatches && seccionMatches;
      });
  
      setResultadosFiltrados(resultadosFiltrados);
      setLimpiarBusqueda(false);
    };
  
    return (
      <div>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Municipio</InputLabel>
            <Select value={municipio} onChange={handleMunicipioChange}>
              <MenuItem value="ABASOLO">ABASOLO</MenuItem>
              <MenuItem value="JERECUARO">JERECUARO</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Sección</InputLabel>
            <Select value={seccion} onChange={handleSeccionChange}>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="21">21</MenuItem>
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="23">23</MenuItem>
              <MenuItem value="24">24</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
       
      <Button  style={{ marginTop: "16px" }} variant="contained" color="secondary" onClick={handleLimpiarBusqueda}>
        Limpiar búsqueda
      </Button>

      {resultadosFiltrados.map((registro, index) => (
        <div key={index} onClick={() => handleRegistroClick(registro)}>
          <p>Nombre: {registro.nombre}</p>
          <p>responsabilidad: {registro.responsabilidad}</p>
          <p>Municipio: {registro.municipio}</p>
          <p>Sección: {registro.seccion}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BuscadorRegistros;