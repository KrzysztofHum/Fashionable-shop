import axios from "axios";
import { API_ROUTES } from "../../const/routes";
import { config } from "../../utils/axiosconfig";

const uploadImg = async (data) => {
  const response = await axios.post(`${API_ROUTES.UPLOAD}`, data, config);
  return response.data;
};

const deleteImg = async (id) => {
  const response = await axios.delete(`${API_ROUTES.DELETE_IMG(id)}`, config);
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;
