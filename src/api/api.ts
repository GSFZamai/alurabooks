import axios, { AxiosError } from "axios";
import { useObterToken } from "../hooks/token";


export const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    let token = sessionStorage.getItem("token");
    console.log("interceptou")
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    alert("Falha ao interceptar requisição!");
    console.log(error)
});

api.interceptors.response.use(success => {
    if (success.status === 401) {
        alert("Usuario não autenticado. Por favor realize o login para continuar");
    }
    return success;
}, error => {
    
    if (error instanceof AxiosError && error.response?.data.status === 401) {
        alert(error.response.data.message ?? "Usuario não autenticado. Por favor realize o login para continuar");
    } else {
        alert("Ocorreu um erro na requisição, tente novamente");
    }
    
    document.location = "/"
    return error
})