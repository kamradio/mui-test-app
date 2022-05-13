import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {Box, Container} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import {TypographySection, ColorsSection, ButtonsSection} from './sections';

import './App.css';

function App() {
  return (
    <div className="App">

      <CssBaseline />

      <Container>
        <Box p={3} mb={5}>
          <Link to="/typography">Typography</Link>{" "}|{" "}
          <Link to="/colors">Colors</Link>{" "}|{" "}
          <Link to="/buttons">Buttons</Link>
        </Box>
      </Container>


      <Routes>
        <Route path="/typography" element={<TypographySection />} />
        <Route path="/colors" element={<ColorsSection />} />
        <Route path="/buttons" element={<ButtonsSection />} />
      </Routes>

    </div>
  );
}

export default App;
