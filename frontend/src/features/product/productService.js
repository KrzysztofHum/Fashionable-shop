import axios from "axios";
import { API_ROUTES } from "../../const/routes";
import { config } from "../../utils/axiosconfig";

// Add Product
const addProduct = async (productData) => {
  const response = await axios.post(API_ROUTES.PRODUCTS, productData, config);
  return response.data;
};


const ProductService = {
  addProduct,
};

export default ProductService;
