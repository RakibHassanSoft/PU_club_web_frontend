import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if email exists in sessionStorage
    const userEmail = sessionStorage.getItem('userEmail');
    
    if (userEmail) {
      // User is logged in
      setIsAuthenticated(true);
    } else {
      // User is not logged in, redirect to login page
      navigate('/signin'); // Redirect to the login page (or any page you prefer)
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;
