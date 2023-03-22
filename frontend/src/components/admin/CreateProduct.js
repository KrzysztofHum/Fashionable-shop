import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ProductSchema from "../../utils/product/ProductSchema";
import { addProduct } from "../../features/product/productSlice";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../../features/upload/uploadSlice";
import { useEffect } from "react";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const { isError, message } = useSelector((state) => state.product);
  const imgState = useSelector((state) => state.upload.images);

  const renderError = (name) => {
    return (
      <div>
        {formik.errors[name] && formik.touched[name] && (
          <div>{formik.errors[name]}</div>
        )}
      </div>
    );
  };

  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  console.log(img);
  useEffect(() => {
    formik.values.images = img;
  }, [img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: Number,
      category: "",
      color: "",
      brand: "",
      quantity: Number,
      images: "",
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      dispatch(addProduct(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <h3 className="mb-2 p-2">Add Product</h3>
      {isError && <div>{message}</div>}
      <div>
        <form
          className="d-flex flex-column gap-15 px-5 product-form"
          onSubmit={formik.handleSubmit}
        >
          <input
            className="form-control"
            name="title"
            type="text"
            placeholder="Title"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            value={formik.values.title}
          />
          {renderError("title")}
          <input
            className="form-control"
            name="description"
            type="text"
            placeholder="Description"
            onChange={formik.handleChange("description")}
            onBlur={formik.handleBlur("description")}
            value={formik.values.description}
          />
          {renderError("description")}

          <input
            className="form-control"
            name="price"
            type="number"
            placeholder="Price"
            onChange={formik.handleChange("price")}
            onBlur={formik.handleBlur("price")}
            value={formik.values.price}
          />
          {renderError("price")}
          <select
            className="form-control"
            name="category"
            as="select"
            placeholder="Category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
          >
            <option value="">Select a category</option>
            <option value="laptop">Laptop</option>
            <option value="telephone">Telephone</option>
            <option value="tablet">Tablet</option>
          </select>
          {renderError("category")}

          <select
            className="form-control"
            name="color"
            as="select"
            placeholder="Color"
            onChange={formik.handleChange("color")}
            onBlur={formik.handleBlur("color")}
            value={formik.values.color}
          >
            <option value="">Select a color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
          </select>
          {renderError("color")}
          <select
            className="form-control"
            name="brand"
            as="select"
            placeholder="Brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
          >
            <option value="">Select a brand</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="huawei">Huawei</option>
          </select>
          {renderError("brand")}
          <input
            className="form-control"
            name="quantity"
            type="number"
            placeholder="Quantity"
            onChange={formik.handleChange("quantity")}
            onBlur={formik.handleBlur("quantity")}
            value={formik.values.quantity}
          />
          {renderError("quantity")}
          <div>
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop somne files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    className="btn-close position-absloute"
                    style={{ top: "10px", right: "10px" }}
                    onClick={() => dispatch(delImg(i.public_id))}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <div>
            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
              <button type="submit" className="button border-0">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
