import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Movilizacion from "./scenes/Movilizacion";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Movilizacion/>} />
              
              <Route path="/Movilizacion" element={<Movilizacion />} />
              
             <Route path="/form" element={<Form />} />  
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

