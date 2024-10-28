import React, { createContext, useState, useEffect } from "react";
import { loginUser } from "../api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await loginUser({ email, password });
    setUser(response.data.user);
    localStorage.setItem("token", response.data.token); // Store token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // You can decode the token to set user data if needed
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
