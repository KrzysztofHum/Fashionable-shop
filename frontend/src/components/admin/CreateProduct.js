import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ProductSchema from "../../utils/product/ProductSchema";
import { addProduct } from "../../features/product/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const { isError, message } = useSelector((state) => state.product);

  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      {isError && <div>{message}</div>}
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: null,
          category: "",
          color: "",
          brand: "",
          quantity: "",
          images: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          dispatch(addProduct(values));
        }}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column gap-15">
            <Field
              className="form-control"
              name="title"
              type="text"
              placeholder="Title"
            />
            {errors.title && touched.title && <div>{errors.title}</div>}
            <Field
              className="form-control"
              name="description"
              type="text"
              placeholder="Description"
            />
            {errors.description && touched.description && (
              <div>{errors.description}</div>
            )}

            <Field
              className="form-control"
              name="price"
              type="number"
              placeholder="Price"
            />
            {errors.price && touched.price && <div>{errors.price}</div>}
            <Field
              className="form-control"
              name="category"
              type="text"
              placeholder="Category"
            />
            {errors.category && touched.category && (
              <div>{errors.category}</div>
            )}

            <Field
              className="form-control"
              name="color"
              type="text"
              placeholder="Color"
            />
            {errors.color && touched.color && <div>{errors.color}</div>}

            <Field
              className="form-control"
              name="brand"
              type="text"
              placeholder="Brand"
            />
            {errors.brand && touched.brand && <div>{errors.brand}</div>}
            <Field
              className="form-control"
              name="quantity"
              type="number"
              placeholder="Quantity"
            />
            {errors.brand && touched.brand && <div>{errors.brand}</div>}
            <Field
              className="form-control"
              name="images"
              type="image"
              placeholder="Image"
            />
            {errors.images && touched.images && <div>{errors.images}</div>}

            <div>
              <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                <button type="submit" className="button border-0">
                  Add Product
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
