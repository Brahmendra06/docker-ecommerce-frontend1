import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { getProducts, getProductImageUrl } from "../../services/productService";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Travel = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts("travel");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-container">
      <h2>Travel</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={getProductImageUrl(product.imagePath)}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>₹{product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No travel products available.</p>
        )}
      </div>
    </div>
  );
};

export default Travel;
