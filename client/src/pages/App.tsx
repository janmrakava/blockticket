import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import Events from './Events';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './Home';
import Layout from '../components/Layout';
import Support from './Support';
import SupportSection from '../components/Support/SupportSection';
import Event from '../components/OneEvent/Event';
import GetTicketsPage from './GetTicketsPage';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderComplete from './OrderComplete';
import Login from './Login';
import Register from './Register';
import EventsByCategory from './EventsByCategory';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoutes';
import Favorites from './Favorites';

const App: React.FC = () => {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/events" element={<Events />} />
              <Route path="/events/:category" element={<EventsByCategory />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/event/:eventId" element={<Event />} />
              <Route path="/support" element={<Support />} />
              <Route path="/support/:section" element={<SupportSection />} />
              <Route
                path="/getTickets/:eventId"
                element={
                  <ProtectedRoute>
                    <GetTicketsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ordercomplete"
                element={
                  <ProtectedRoute>
                    <OrderComplete />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
