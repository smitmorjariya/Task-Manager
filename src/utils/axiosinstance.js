import axios from "axios";
import { API_PATHS, BASE_URl } from "./apipaths";



const axiosInstance = axios.create({
    baseURL: BASE_URl,
    timeout: 10000, // 10 seconds timeout
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add Authorization header if token exists
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {
            if (error.response.status === 401) {
                // Redirecte to login page if unauthorized
                window.location.href = "/login";
            } else if (error.response.status === 500) {
                // Handle server error
                alert("Server error. Please try again later.");
            }
        } else if (error.code === "ECONNABORTED") {
            // Handle timeout error
            alert("Request timed out. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

