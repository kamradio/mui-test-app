import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {Box, Container} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import {TypographySection, ColorsSection} from './sections';

import './App.css';

function App() {
  return (
    <div className="App">

      <CssBaseline />

      <Container>
        <Box p={3}>
          <Link to="/typography">Typography</Link>{" "}|{" "}
          <Link to="/colors">Colors</Link>
        </Box>
      </Container>


      <Routes>
        <Route path="/typography" element={<TypographySection />} />
        <Route path="/colors" element={<ColorsSection />} />
      </Routes>

    </div>
  );
}

export default App;
