import React, { useContext } from 'react';
import { AppContext } from "./App";
import './CheckoutProduct.css';

function CheckoutProduct() {
  const { basket, setBasket } = useContext(AppContext)

  const removeHandler = (id) => {
    const index = basket.findIndex((item) => item.id === id);
    const newBasket = [...basket];
    newBasket[index].quantity--;
    if (newBasket[index].quantity === 0) {
      newBasket.splice(index, 1);
    }
    setBasket(newBasket);
  };

  return (
    <>
      {basket.map((item) => (
        <div key={item.id} className="checkoutProduct">
          <img
            src={item.image}
            alt="the product"
            className="checkoutProduct__image"
          />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{item.title}</p>
            <p className="product__price">
              <smal>£</smal>
              <strong>{item.price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <p className="checkoutProduct__quantity">
              Quantity: {item.quantity}
            </p>
            <button onClick={() => removeHandler(item.id)}>
              remove from Basket
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CheckoutProduct;