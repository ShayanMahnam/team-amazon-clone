import React, { useState, useContext } from "react";
import { AppContext } from "./App";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const { basket, setBasket } = useContext(AppContext);

  const [showPopup, setShowPopup] = useState(false); // state variable to control visibility of pop-up message

  const addProduct = () => {
    const index = basket.findIndex((item) => item.id === id);
    if (index === -1) {
      setBasket([...basket, { id, title, price, rating, image, quantity: 1 }]);
    } else {
      const newBasket = [...basket];
      newBasket[index].quantity++;
      setBasket(newBasket);
    }
    setShowPopup(true); // show pop-up message
    setTimeout(() => {
      setShowPopup(false); // hide pop-up message after 2 seconds
    }, 5000);
  };

  return (
    <div className="product-container">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star">⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />

      <button onClick={addProduct}>Add to Basket</button>

      {showPopup && (
        <div className="popup">
          <p>Item added to basket!</p>
        </div>
      )}
    </div>
  );
}

export default Product;
