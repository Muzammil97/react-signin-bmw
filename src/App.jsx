import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './Comp/PageLayout/PageLayout';
import AuthScreen from './screens/AuthScreen';
import Dashboard from './screens/Dashboard'; // Import Dashboard
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute
import './App.css';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;