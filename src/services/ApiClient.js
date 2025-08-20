import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/",
  // withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Optional: Set a timeout for mobile network conditions
});

export default apiClient;
