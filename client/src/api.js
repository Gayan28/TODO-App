import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
  baseURL: "http://localhost:5000/api/todos"
});

// GLOBAL ERROR HANDLER
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    if (error.response) {
      toast.error(error.response.data.message || "Server error");
    } else if (error.request) {
      toast.error("Network error. Please check your connection.");
    } else {
      toast.error("Something went wrong");
    }

    return Promise.reject(error);
  }
);

export default API;