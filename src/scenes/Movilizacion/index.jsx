import React, { useState } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import LineChart from "../../components/LineChart";
import LinechartFederal from "../../components/LinechartFederal";
import LinechartLocal from "../../components/LinechartLocal";
import BarChart from "../../components/BarChart";
import BarChartFederal from "../../components/BarcharFederal";
import BarChartLocal from "../../components/BarchartLocal";

const Movilizacion = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedChart, setSelectedChart] = useState("bar");
  const [selectedLineChart, setSelectedLineChart] = useState("line");

  const handleChartChange = (event) => {
    const value = event.target.value;
    setSelectedChart(value);
  
    if (value === "bar") setSelectedLineChart("line");
    if (value === "barFederal") setSelectedLineChart("lineFederal");
    if (value === "barLocal") setSelectedLineChart("lineLocal");
  };

  const columns = [
   
    {
      field: "id",
      headerName: "ID",
      flex: 0.01,
    },
    {
      field: "DISTRITO FEDERAL",
      headerName: "DISTRITO FEDERAL",
      flex: 0.01,
    },
    {
      field: "DISTRITO LOCAL",
      headerName: "DISTRITO LOCAL",
      flex: 0.01,
    },
    {
      field: "REGIÓN",
      headerName: "REGIÓN",
      flex: 0.01,
    },
    {
      field: "MUNICIPIO",
      headerName: "MUNICIPIO",
      flex: 1,
    },
    {
      field: "POLÍGONO",
      headerName: "POLÍGONO",
      flex: 0.1,
    },
    {
      field: "SECCIÓN",
      headerName: "SECCIÓN",
      flex: 0.1,
    },
    {
      field: "LNOM",
      headerName: "LNOM",
      flex: 0.1,
    },
    {
      field: "META",
      headerName: "META",
      flex: 1,
    },
    {
      field: "COMPROMISOS",
      headerName: "COMPROMISOS",
      flex: 1,
    },
    {
      field: "AVANCE",
      headerName: "AVANCE",
      flex: 1,
    },
    {
      field: "DETECTADOS",
      headerName: "DETECTADOS",
      flex: 1,
    },
    {
      field: "OTROS",
      headerName: "OTROS",
      flex: 1,
    },
    {
      field: "PORCENTAJE",
      headerName: "PORCENTAJE",
      flex: 1,
    },
    {
      field: "EFECTIVIDAD",
      headerName: "EFECTIVIDAD",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="Dashboard Movilizacion" />
      <p>Selecciona una vista:</p>
        <Select value={selectedChart} onChange={handleChartChange}>
          <MenuItem value="bar">Estatal</MenuItem>
          <MenuItem value="barLocal">Distrito Local</MenuItem>
          <MenuItem value="barFederal">Distrito Federal</MenuItem>
        </Select>
      <Box
        m={{ xs: "20px 0", sm: "40px 0" }}
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap="40px"
      >
        <Box height={{ xs: "300px", sm: "400px", md: "500px" }}>
         
          {selectedLineChart === "line" && <LineChart />}
          {selectedLineChart === "lineFederal" && <LinechartFederal />}
          {selectedLineChart === "lineLocal" && <LinechartLocal />}
        </Box>
        <Box height={{ xs: "300px", sm: "400px", md: "500px" }}>
          
          {selectedChart === "bar" && <BarChart />}
          {selectedChart === "barFederal" && <BarChartFederal />}
          {selectedChart === "barLocal" && <BarChartLocal />}
        </Box>
      </Box>
      <Box height="75vh" mt="40px">
        <DataGrid
          rows={mockData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Movilizacion;