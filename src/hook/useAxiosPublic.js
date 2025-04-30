import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: '/'
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:5000/api/v1'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;