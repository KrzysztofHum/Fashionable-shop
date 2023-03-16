import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ProductSchema from "../../utils/product/ProductSchema";
import { addProduct } from "../../features/product/productSlice";
import Dropzone from "react-dropzone";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const { isError, message } = useSelector((state) => state.product);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addProduct(values));
    resetForm();
  };

  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      {isError && <div>{message}</div>}
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: Number,
          category: "",
          color: "",
          brand: "",
          quantity: Number,
          image: [],
        }}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column gap-15 px-5 product-form">
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
              as="select"
              placeholder="Category"
            >
              <option value="">Select a category</option>
              <option value="laptop">Laptop</option>
              <option value="telephone">Telephone</option>
              <option value="tablet">Tablet</option>
            </Field>
            {errors.category && touched.category && (
              <div>{errors.category}</div>
            )}

            <Field
              className="form-control"
              name="color"
              as="select"
              placeholder="Color"
            >
              <option value="">Select a color</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
            </Field>
            {errors.color && touched.color && <div>{errors.color}</div>}
            <Field
              className="form-control"
              name="brand"
              as="select"
              placeholder="Brand"
            >
              <option value="">Select a brand</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="huawei">Huawei</option>
            </Field>
            {errors.brand && touched.brand && <div>{errors.brand}</div>}
            <Field
              className="form-control"
              name="quantity"
              type="number"
              placeholder="Quantity"
            />
            {errors.quantity && touched.quantity && (
              <div>{errors.quantity}</div>
            )}
            <Field
              name="image"
              render={({ field, form }) => (
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    form.setFieldValue(field.name, acceptedFiles[0]);
                  }}
                  accept="image/*"
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" {...getRootProps()}>
                      <input {...getInputProps()} />
                      {field.value instanceof File ? (
                        <img
                          src={URL.createObjectURL(field.value)}
                          alt="preview"
                        />
                      ) : (
                        <p>Drag and drop an image, or click to select a file</p>
                      )}
                    </div>
                  )}
                </Dropzone>
              )}
            />
            {errors.image && touched.image && <div>{errors.images}</div>}

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
