import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";
import "./productDetail.css";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return source ? builder.image(source).url() : "";
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "product" && _id == $id][0]`,
          { id }
        );
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="product-detail">
      <div>
        {product.images?.length > 0 ? (
          product.images?.map((image, index) => (
            <div key={index} className="productCard">
              <div className="imageContainer">
                <img src={urlFor(image.asset)} alt={`Image ${index + 1}`} />
              </div>
              <div className="product-info">
                {image.name && (
                  <div>
                    <h2>{image.name}</h2>
                    {image.tags && (
                      <p>
                        <strong>Tags: </strong>
                        {image.tags}
                      </p>
                    )}
                    {image.description && (
                      <p>
                        <strong>Description: </strong>
                        {image.description}
                      </p>
                    )}
                    {image.usage && (
                      <p>
                        <strong>Usage: </strong>
                        {image.usage}
                      </p>
                    )}
                    {image.size && (
                      <p>
                        <strong>Size: </strong>
                        {image.size}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No images avialable</p>
        )}
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
