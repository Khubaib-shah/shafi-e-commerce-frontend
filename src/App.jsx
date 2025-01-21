import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useParams } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Auth from "./Auth/Auth";
import NotFound from "./NotFound";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

// Wrapper for ProductDetails to extract route params
const ProductDetailsWrapper = () => {
  const { id } = useParams();
  return <ProductDetails id={id} />;
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Group routes with Navbar */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailsWrapper />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* Routes without Navbar */}
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
