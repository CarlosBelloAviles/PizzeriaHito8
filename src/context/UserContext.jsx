import React, { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

 
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", email);
        setToken(data.token);
        setUser(email);
      } else {
        throw new Error(data.message || "Error de autenticación");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", { 
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email: email,
      password: password,
      }),
      });
      const data = await response.json();
      alert(data?.error || "Registration successful!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", email);
      setToken(data.token);
      setUser(email);
      
};

const getUser = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      setUser(data.email);
    } else {
      throw new Error(data.message || "Error al obtener perfil");
    }
  } catch (error) {
    console.error(error);
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
   
  };

  return (
    <UserContext.Provider value={{ token, user, login, register, getUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
