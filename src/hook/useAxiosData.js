import { useQuery, useMutation } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivet';
import useAxiosPublic from './useAxiosPublic';

const makeRequest = async (axiosInstance, method, endpoint, params, body) => {
  let response;
  switch (method) {
    case 'POST':
      response = await axiosInstance.post(endpoint, body, { params });
      break;
    case 'PUT':
      response = await axiosInstance.put(endpoint, body, { params });
      break;
    case 'PATCH': // ✅ ADD THIS
      response = await axiosInstance.patch(endpoint, body, { params });
      break;
    case 'DELETE':
      response = await axiosInstance.delete(endpoint, { data: body, params });
      break;
    case 'GET':
    default:
      response = await axiosInstance.get(endpoint, { params });
      break;
  }
  return response.data;
};


const useAxiosData = ({ secure = false, method = 'GET', endpoint, params = {}, body = {} }) => {
  const axiosPrivateInstance = useAxiosPrivate();
  const axiosPublicInstance = useAxiosPublic();
  const axiosInstance = secure ? axiosPrivateInstance : axiosPublicInstance;

  const isGetMethod = method === 'GET';

  const queryResult = useQuery({
    queryKey: [endpoint, params],
    queryFn: () => makeRequest(axiosInstance, 'GET', endpoint, params, body),
    enabled: isGetMethod,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const mutationResult = useMutation({
    mutationFn: (bodyData) => makeRequest(axiosInstance, method, endpoint, params, bodyData),
    onError: (err) => {
      console.error('Error during mutation:', err);
    },
    onSuccess: (data) => {
      console.log('Mutation successful', data);
    },
  });

  if (isGetMethod) {
    const { data, error, isLoading } = queryResult;
    return { data, loading: isLoading, error };
  } else {
    const { data, error, isLoading, mutate } = mutationResult;
    return { data, loading: isLoading, error, mutate };
  }
};

export default useAxiosData;


/*
  🔧 useAxiosData Hook Usage Guide

  This hook handles GET, POST, PUT, PATCH, DELETE requests via Axios and React Query.

  Common Parameters:
  {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', // ✅ HTTP method (default: 'GET')
    secure: true | false,     // 🔐 Choose axios instance (false = public, true = private)
    endpoint: string,         // 🔗 API endpoint, e.g. '/posts/1'
    params?: object,          // 📦 Query parameters, e.g. { userId: 1 }
    body?: object             // 📝 Request body (for POST, PUT, PATCH, DELETE)
  }

  ✅ GET Example:
  useAxiosData({
    method: 'GET',
    secure: false,
    endpoint: '/posts',
    params: { userId: 1 }
  });

  ✅ POST Example:
  const { mutate } = useAxiosData({
    method: 'POST',
    secure: false,
    endpoint: '/posts',
    body: { title: 'New', body: 'Text', userId: 1 }
  });
  mutate(); // call this to trigger the POST

  ✅ PUT Example:
  const { mutate } = useAxiosData({
    method: 'PUT',
    secure: false,
    endpoint: '/posts/1',
    body: { id: 1, title: 'Updated', body: 'Updated body', userId: 1 }
  });
  mutate();

  ✅ PATCH Example:
  const { mutate } = useAxiosData({
    method: 'PATCH',
    secure: false,
    endpoint: '/posts/1',
    body: { title: 'Partially Updated' }
  });
  mutate();

  ✅ DELETE Example:
  const { mutate } = useAxiosData({
    method: 'DELETE',
    secure: false,
    endpoint: '/posts/1'
  });
  mutate();

  🔁 Return values:
  {
    data,          // ✅ response data
    loading,       // ⏳ loading state
    error,         // ❌ error object
    mutate?        // 🔁 only returned for mutation methods
  }
*/
