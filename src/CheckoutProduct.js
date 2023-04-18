import React, { useContext } from 'react';
import { AppContext } from "./App";
import './CheckoutProduct.css';

function CheckoutProduct() {
  const { basket, setBasket } = useContext(AppContext)

  const removeHandler = (id) => {
    const itemIndex = basket.findIndex((item) => item.id === id);
    basket.splice(itemIndex, 1);
    setBasket([...basket]);
  }

  return (
    <>
      {basket.map(item =>
      (
        <div key={item.id} className="checkoutProduct">
          <img src={item.image} alt='the product' className="checkoutProduct__image" />
          <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{item.title}</p>
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
            <button onClick={() => removeHandler(item.id)}>remove from Basket</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CheckoutProduct;