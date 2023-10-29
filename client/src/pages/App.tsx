import React from 'react';
import './App.css';
import Layout from '../components/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Events from '../components/Events';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
