const API_BASE_ROUTE =
  process.env.REACT_APP_API_BASE_ROUTE || "https://media-king.onrender.com/api";

export const API_ROUTES = {
  REGISTER: `${API_BASE_ROUTE}/user/register`,
  LOGIN: `${API_BASE_ROUTE}/user/login`,
  PRODUCTS: `${API_BASE_ROUTE}/product`,
  UPLOAD: `${API_BASE_ROUTE}/upload`,
  DELETE_IMG: (id) => `${API_BASE_ROUTE}/upload/delete-img/${id}`,
};
