import axios from "axios";
import { API_ROUTES } from "../../const/routes";

const user = JSON.parse(localStorage.getItem("user"));

// Register user
const addProduct = async (productData) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };
  const response = await axios.post(API_ROUTES.ADDPRODUCT, productData, config);
  return response.data;
};

const ProductService = {
  addProduct,
};

export default ProductService;
