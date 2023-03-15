import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Resetpassword from "./pages/Resetpassword";
import TermAndContions from "./pages/TermAndContions";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import SingleBlog from "./pages/SingleBlog";
import SignIn from "./pages/SignIn";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import AdminPanelLayout from "./components/admin/AdminPanelLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanelLayout />}>
          <Route path="admin" element={<AdminCreateProduct />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="reset-password" element={<Resetpassword />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="term-conditions" element={<TermAndContions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
