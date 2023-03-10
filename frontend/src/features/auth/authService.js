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

const AuthService = {
  register,
};

export default AuthService;
