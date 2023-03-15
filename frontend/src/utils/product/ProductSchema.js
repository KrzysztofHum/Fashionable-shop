import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(6, "Title is too short")
    .max(50, "Title is too long")
    .required("Title is required"),
  desc: Yup.string()
    .min(6, "Description is too short")
    .max(50, "Description is too long")
    .required("Description is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  color: Yup.string(),
  brand: Yup.string().required("Brand is required"),
  quantity: Yup.number().required("Quantity is required"),
  images: Yup.string(),
});

export default ProductSchema;
