import React from 'react';
import './App.css';
import Layout from '../components/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Events from '../components/Events';
import { ThemeProvider, createTheme } from '@mui/material';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/events" element={<Events />} />
            <Route path="/" element={<Layout />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
