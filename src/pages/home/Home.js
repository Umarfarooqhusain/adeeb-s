import React, { useEffect, useState } from "react";
import "./home.css";
import client from "../../sanityClient";
import ProductCard from "../../components/productCard/ProductCard";
import hero from "../../assets/images/hero.jpg";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
function urlFor(source) {
  return source ? builder.image(source).url() : "";
}

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        images[]{
          asset->{
            _id,
            url
          }
        }
      }
    `);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homePage">
      <div className="section1">
        <div className="imag">
          <img src={hero} alt="hero image" />
        </div>
        <div className="heading">
          <h1>Discover The Innovative Way To Decorate</h1>
          <p>
            NOVEL ARTISANS is a reputable manufacturer and exporter of
            handcrafted products made from materials such as horn, bone,
            acrylic, resin, wood, brass, copper, and iron. Their product range
            includes home décor items like bowls, trays, candle holders, and
            photo frames, as well as fashion jewelry such as bangles, bracelets,
            and necklaces. Additionally, they produce specialized items like
            horn mugs, furniture, and copper water bottles. The company is
            dedicated to maintaining high standards of quality, ensuring their
            products enjoy a strong international reputation.{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="cards">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
