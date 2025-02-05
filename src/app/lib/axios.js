const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (authentication commented out)
api.interceptors.request.use((config) => {
  // Public access for all routes
  // Previously: const publicRoutes = ["/login", "/register"];

  // Remove authentication logic
  // if (!publicRoutes.includes(config.url)) {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  // }

  return config;
});

// Response interceptor (401 handling commented out)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Remove authentication error handling
    // if (error.response?.status === 401) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  }
);

export default api;
