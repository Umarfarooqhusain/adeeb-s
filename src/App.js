import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import ProductDetail from "./pages/product/productDetail";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MotionWrapper from "./components/MotionWrapper"; // Import the new MotionWrapper
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const location = useLocation();

  return (
    <div className="main">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MotionWrapper>
                <Home />
              </MotionWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <MotionWrapper>
                <About />
              </MotionWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <MotionWrapper>
                <Contact />
              </MotionWrapper>
            }
          />
          <Route
            path="/gallery"
            element={
              <MotionWrapper>
                <Gallery />
              </MotionWrapper>
            }
          />
          <Route
            path="/product/:id"
            element={
              <MotionWrapper>
                <ProductDetail />
              </MotionWrapper>
            }
          />
          <Route
            path="*"
            element={
              <MotionWrapper>
                <h2>404 Not Found</h2>
              </MotionWrapper>
            } // 404 Page
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
