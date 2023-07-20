import axios from "axios";
import { REACT_APP_INTERNAL_API_PATH } from "../utils";

const api = axios.create({
    baseURL: REACT_APP_INTERNAL_API_PATH,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})


export const LoginApi = async(data) => {
    let response;
    try {
        response = await api.post("/login", data);
    } catch (error) {
        return error;
    }
    return response;
}