
import Topbar from "../global/Topbar";
import React from "react";
import BuscadorRegistros from "../../components/Formulario";
import Formulario from "../../components/Formulario2";

const App = () => {
  const appStyle = {
    marginLeft: "30px", 
    marginRight: "50px"
  };
  const formulariostyle = {
    marginTop: "40px"
    
  };

  return (
    <div style={appStyle}>
      <h2>Busqueda de responsable</h2>
      <BuscadorRegistros />
      <div style={formulariostyle}></div>
      <Formulario />
      <Topbar /> 
      
    </div>
  );
};

export default App;