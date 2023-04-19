import React, { useContext } from "react";
import { AppContext } from "./App"
import "./Product.css";

function Product({ id, title, price, rating, image }) {

  const { basket, setBasket } = useContext(AppContext);

 const addProduct = () => {
   const index = basket.findIndex((item) => item.id === id);
   if (index === -1) {
     setBasket([...basket, { id, title, price, rating, image, quantity: 1 }]);
   } else {
     const newBasket = [...basket];
     newBasket[index].quantity++;
     setBasket(newBasket);
   }
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
    </div>
  );
}

export default Product;
