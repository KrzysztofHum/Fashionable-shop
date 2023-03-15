import axios from "axios";
import { API_ROUTES } from "../../const/routes";

// Register user
const addProduct = async (productData) => {
  const response = await axios.post(API_ROUTES.ADDPRODUCT, productData);
  return response.data;
};

const ProductService = {
  addProduct,
};

export default ProductService;
