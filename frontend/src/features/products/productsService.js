import axios from "axios";
import { API_ROUTES } from "../../const/routes";
import { config } from "../../utils/axiosconfig";

// Get all Products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_ROUTES.PRODUCTS, config);
    return response.data;
  } catch (error) {
    // Handle the error and return an error message or throw the error
    console.error("Error fetching products:", error);
    throw error;
  }
};

const ProductsService = {
  getProducts,
};

export default ProductsService;
