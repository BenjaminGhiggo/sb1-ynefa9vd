import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Principal from './pages/Principal';
import EmisionBoletaFactura from './pages/EmisionBoletaFactura';
import HistorialComprobantes from './pages/HistorialComprobantes';
import Suscripcion from './pages/Suscripcion';
import Quipu from './pages/Quipu';
import AsesoriaGenai from './pages/AsesoriaGenai';
import MisMetricas from './pages/MisMetricas';
import DeclaracionDelMes from './pages/DeclaracionDelMes';
import Alertas from './pages/Alertas';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/emision" element={<EmisionBoletaFactura />} />
        <Route path="/historial" element={<HistorialComprobantes />} />
        <Route path="/suscripcion" element={<Suscripcion />} />
        <Route path="/quipu" element={<Quipu />} />
        <Route path="/asesoria" element={<AsesoriaGenai />} />
        <Route path="/metricas" element={<MisMetricas />} />
        <Route path="/declaracion" element={<DeclaracionDelMes />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/preguntas" element={<PreguntasFrecuentes />} />
      </Routes>
    </Router>
  );
}

export default App;