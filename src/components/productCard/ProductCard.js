import React from "react";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";
import "./product.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return source ? builder.image(source).url() : "";
}

const ProductCard = ({ product }) => {
  const imageSource = product.images?.[0]?.asset;

  return (
    <Link
      to={`/product/${product._id}`}
      className="product-link"
      aria-label={`View details of ${product.name || "product"}`}
    >
      <div className="container">
        <figure className="card">
          <img
            src={
              imageSource ? urlFor(imageSource) : "path/to/fallback/image.jpg"
            }
            alt={
              product.name ? `Image of ${product.name}` : "Image not available"
            }
            className="product-image"
            loading="lazy"
          />
        </figure>
        <h1>{product.name || "Product Name Not Available"}</h1>
      </div>
    </Link>
  );
};

export default ProductCard;
