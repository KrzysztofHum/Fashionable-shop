import axios from "axios";
import { API_ROUTES } from "../../const/routes";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_ROUTES.REGISTER, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user

const login = async (userData) => {
  const response = await axios.post(API_ROUTES.LOGIN, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
