import axios from "axios";
import { API_ROUTES } from "../../const/routes";
import { config } from "../../utils/axiosconfig";

const uploadImg = async (data) => {
  const response = await axios.post(`${API_ROUTES.ADDPRODUCT}`, data, config);
  return response.data;
};

const uploadService = {
  uploadImg,
};

export default uploadService;
