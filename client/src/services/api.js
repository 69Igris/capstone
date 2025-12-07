import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: `${API_BASE}/api`,
});

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);

// Course APIs
export const getCourses = (params) => api.get("/courses", { params });
export const getCourse = (id) => api.get(`/courses/${id}`);
export const createCourse = (data) => api.post("/courses", data, { headers: getAuthHeader() });
export const updateCourse = (id, data) => api.put(`/courses/${id}`, data, { headers: getAuthHeader() });
export const deleteCourse = (id) => api.delete(`/courses/${id}`, { headers: getAuthHeader() });

// Helper to get auth header
export const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default api;
