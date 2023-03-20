const API_BASE_ROUTE = "http://localhost:5000/api";

export const API_ROUTES = {
  REGISTER: `${API_BASE_ROUTE}/user/register`,
  LOGIN: `${API_BASE_ROUTE}/user/login`,
  ADDPRODUCT: `${API_BASE_ROUTE}/product`,
  UPLOAD: `${API_BASE_ROUTE}/upload`,
  DELETE_IMG: (id) => `${API_BASE_ROUTE}/upload/delete-img/${id}`,
};
