import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const StoreProductCard = ({ data, grid }) => {
  const {
    brand,
    category,
    color,
    description,
    images,
    price,
    quantity,
    slug,
    sold,
    title,
  } = data;
  let location = useLocation();
  console.log(images[0].url);
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4">
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute p-1">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={images[0].url} alt="product" />
          </div>
          <div className="product-details">
            <h5 className="product-title mb-0 mt-3">{title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price mb-0">{price} $</p>
          </div>
          <div className="action-bar position-absolute p-1">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default StoreProductCard;
