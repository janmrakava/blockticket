import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Events from '../components/Events';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './Home';
import Layout from '../components/Layout';
import Support from './Support';
import SupportSection from '../components/Support/SupportSection';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/events" element={<Events />} />
              <Route path="/" element={<Home />} />
              <Route path="/support" element={<Support />} />
              <Route path="/support/:section" element={<SupportSection />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
