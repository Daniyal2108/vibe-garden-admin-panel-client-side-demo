import axios from "axios";

// const baseURL = "https://vibe-garden-backend.herokuapp.com/api/v1";
// const baseURL = "http://192.168.100.15:3040/api/v1";
// const baseURL = "https://167b-39-48-194-143.ngrok-free.app/api/v1";

// const baseURL = "https://vibe-garden-app-2051289936a5.herokuapp.com/api/v1";
// updated
// const baseURL = "http://localhost:3040/api/v1";
const baseURL = "https://vibegarden-f0a09815bc35.herokuapp.com/api/v1";

const apicall = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

apicall.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ` + token : "";
  return config;
});

export default apicall;

export const ImageUrl =
  "https://vibe-garden-development.s3.ap-south-1.amazonaws.com/";
