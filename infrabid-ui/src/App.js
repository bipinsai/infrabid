import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from './components/LandingPage';
import ServicesPage from "./components/ServicesPage"; 
import './styles/App.css';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
            <Layout> {/* Layout wraps all the pages, keeping navbar persistent */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    {/* <Route path="/about" element={<AboutPage />} /> */}
                </Routes>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
