import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt='the product' className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)</p>
        <p className="product__price">
          <smal>$</smal>
          <strong>$11.96</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(3)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Add to Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;