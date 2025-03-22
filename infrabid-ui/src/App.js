import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import './styles/App.css';
import { CssBaseline } from '@mui/material';
import LandingPage from './components/homePage/LandingPage';
import EquipmentPage from "./components/equipmentPage/EquipmentPage";
import AboutUsPage from "./components/aboutPage/AboutUsPage";
import ContractsPage from "./components/contractPage/ContractsPage";
import ComingSoonPage from "./components/comingSoonPage/comingSoonPage";
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contracts" element={<ContractsPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/comingsoon" element={<ComingSoonPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
