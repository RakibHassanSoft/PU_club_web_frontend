import { useState, useEffect, useCallback } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useUser = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic();

  const fetchUser = useCallback(async () => {
    const userEmail = sessionStorage.getItem('userEmail');

    if (!userEmail) {
      setError('No user email found');
      setLoading(false);
      return;
    }

    setLoading(true); // Set loading to true before refetch
    try {
      const response = await axiosInstance.get(`/auth/user/${userEmail}`);
      setIsAdmin(response.data.isAdmin);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  }, [axiosInstance]);

  useEffect(() => {
    fetchUser(); // Initial fetch on mount
  }, [fetchUser]);

  return { isAdmin, loading, error, refetch: fetchUser };
};

export default useUser;
