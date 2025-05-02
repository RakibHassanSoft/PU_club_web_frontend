import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect
import useUser from '../../hook/useUser';
 // Custom hook to get user info (like isAdmin)

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAdmin, loading } = useUser(); // Assume useUser returns the authentication status

  // If the user is still loading, you can show a loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      element={
        // If the user is not an admin, redirect them to the login page (or another page)
        !isAdmin ? (
          <Navigate to="/login" />
        ) : (
          // If the user is an admin, render the component
          Component
        )
      }
    />
  );
};

export default ProtectedRoute;
