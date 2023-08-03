import axios from "axios";
import { REACT_APP_INTERNAL_API_PATH } from "../utils";


const api = axios.create({
  baseURL: REACT_APP_INTERNAL_API_PATH,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});



// Auth api 

export const LoginApi = async (data) => {
  let response;
  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }
  return response;
};

export const SignUpApi = async (data) => {
  let response;

  try {
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const LogoutApi = async () => {
  let response;
  try {
    response = await api.post("/logout");
  } catch (error) {
    return error;
  }
  return response;
};



// Blog api 

export const BlogsApi = async () => {
  let response;
  try {
    response = await api.get("/blog/all");
  } catch (error) {
    return error;
  }
  return response;
}


export const SubmitBlogApi = async (data) => {
  let response;
  try {
    response = await api.post("/blog", data);
  } catch (error) {
    return error
  }
  return response;
}
