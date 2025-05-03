import axios from "axios";

export const request = axios.create({
    //Malumotlarni backenddan olish uchun url >>>
    baseURL: "http://localhost:4000/api/v1",
    timeout: 10000,
});

request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if(error.response.status === 401) {
            // Handle token expiration
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)