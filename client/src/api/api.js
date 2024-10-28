import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// User Authentication
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const logoutUser = () => {
  localStorage.removeItem("token");
  api.defaults.headers.common["Authorization"] = "";
};

// Contact Management
export const addContact = (data) =>
  api.post("/contacts", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const getContacts = () =>
  api.get("/contacts", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const updateContact = (id, data) =>
  api.put(`/contacts/${id}`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
export const deleteContact = (id) =>
  api.delete(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

// Export default for axios instance
export default api;
