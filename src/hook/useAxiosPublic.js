import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: '/'
    baseURL: 'https://pu-club-web-backend.onrender.com/api/v1'
    // baseURL: 'http://localhost:5000/api/v1'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;