// src/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Authentication state is determined
      if (!user) {
        navigate('/'); // Redirect to the login page if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!user) {
    return null; // Don't render anything if not authenticated (already redirected)
  }

  return children;
};

export default ProtectedRoute;