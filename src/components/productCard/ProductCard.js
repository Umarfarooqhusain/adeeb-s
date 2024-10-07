import React from "react";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";
import "./product.css";

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
function urlFor(source) {
  return source ? builder.image(source).url() : "";
}

const ProductCard = ({ product }) => {
  console.log(product);
  // Access the first image directly from the product object
  const imageSource = product.images?.[0]?.asset;

  return (
    <Link to={`/product/${product._id}`}>
      <div className="container">
        <div className="card">
          <img
            src={
              imageSource ? urlFor(imageSource) : "path/to/fallback/image.jpg"
            }
            alt={product.name}
            className="product-image"
          />
        </div>
        <h1>{product.name || "Product Name Not Available"}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
