
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./Components/Home/HomePage.jsx";
import AboutPage from "./Components/About/AboutPage.jsx";
import PricingPage from "./Components/Pricing/PricingPage.jsx";
import ProductPage from "./Components/Products/ProductPage.jsx";
import SupportPage from "./Components/Support/SupportPage.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "../src/Components/Footer.jsx";
import NotFound from "./Components/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
