import React, { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard"; // Assuming the correct path to the ProductCard component
import client from "../../sanityClient";
import "./gallery.css";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]`)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="gallery-page">
      <h1>Galería</h1>
      <div className="product-gallery">
        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
