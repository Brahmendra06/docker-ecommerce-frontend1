import axios from "axios";

const API_URL = "http://localhost:8081/auth";

// Login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });

    // Backend returns a token (or you can add later)
    const token = response.data.token || "dummy-token";

    // save token in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("isAuthenticated", "true");

    return token;
  } catch (error) {
    throw error.response?.data?.message || "Login failed!";
  }
};

// Signup function
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Signup failed!";
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAuthenticated");
};
