import axios from "axios";
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
    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
} , (error) => {
    alert("Falha ao interceptar requisição!");
    console.log(error)
});