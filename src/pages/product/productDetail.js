// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import imageUrlBuilder from "@sanity/image-url";
// import client from "../../sanityClient"; // Import your Sanity client
// import "./productDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     client
//       .fetch(`*[_type == "product" && _id == $id][0]`, { id })
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//       });
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   const builder = imageUrlBuilder(client);

//   function urlFor(source) {
//     return source ? builder.image(source).url() : ""; // Check if source exists
//   }

//   return (
//     <div className="product-detail">
//       <div>
//         <img src={urlFor(product.image)} alt={product.name} />
//       </div>
//       <div className="headings">
//         <h1>{product.name}</h1>
//         <h2>
//           <strong>Tags: </strong>
//           {product.tags}
//         </h2>
//         <p>
//           <strong>Description: </strong>
//           {product.description}
//         </p>
//         <p>
//           <strong>Usage: </strong>
//           {product.usage}
//         </p>
//         <p>
//           <strong>Size: </strong>
//           {product.size}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanityClient";
import "./productDetail.css";

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
function urlFor(source) {
  return source ? builder.image(source).url() : "";
}

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "product" && _id == $id][0]`, { id })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <div>
        {product.images?.map((image, index) => (
          <div key={index} className="productCard">
            <div className="imageContainer">
              <img src={urlFor(image.asset)} alt={`Image ${index + 1}`} />
            </div>
            <div className="headings">
              <h2>{image.name}</h2>
              <p>
                <strong>Tags: </strong>
                {image.tags}
              </p>
              <p>
                <strong>Description: </strong>
                {image.description}
              </p>
              <p>
                <strong>Usage: </strong>
                {image.usage}
              </p>
              <p>
                <strong>Size: </strong>
                {image.size}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="headings">
        <h1>{product.name}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
