import axios from "axios";
const BASE_URL =
  import.meta.env.VITE_ENV === "prod"
    ? import.meta.env.VITE_API_URL
    : "localhost:8080/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
