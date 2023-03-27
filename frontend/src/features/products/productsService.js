import axios from "axios";
import { API_ROUTES } from "../../const/routes";
import { config } from "../../utils/axiosconfig";

// Get all Products
const getProducts = async () => {
  const response = await axios.get(API_ROUTES.PRODUCTS, config);
  return response.data;
};

const ProductsService = {
  getProducts,
};

export default ProductsService;
