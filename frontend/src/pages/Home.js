import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-4">
        <div className="row">
          <div className="col-12 col-md-6 mt-2">
            <div className="main-banner-content p-3">
              <h4>SUPER FOR PROGRAMMERS</h4>
              <h5>Mac Book Pro 13.3</h5>
              <p>From $1499.00 or $79.00/mo.</p>
              <Link to="/" className="button">
                BUY NOW
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <div className="small-banner p-3">
              <h4>SUPER TO STUDY</h4>
              <h5>Samsung Galaxy Tab S6</h5>
              <p>From $1499.00 or $79.00/mo.</p>
              <Link to="/" className="button">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <h2>Popular Categories</h2>
        <div className="row pt-5">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="images/cat-laptop.jpg"
                  class="d-block w-100"
                  alt="brand"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Laptops</h5>
                  <p>Buy your dream laptop.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="images/cat-telephone.jpg"
                  class="d-block w-100"
                  alt="brand"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mobile Phone</h5>
                  <p>latest mobile phone brands.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="images/cat-tablet.jpg"
                  class="d-block w-100"
                  alt="brand"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Tablets</h5>
                  <p>Tablets ideal for learning and more. </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      {/* <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
      </Container> */}
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <BlogCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <BlogCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <BlogCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
