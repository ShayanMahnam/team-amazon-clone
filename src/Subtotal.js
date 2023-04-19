import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Subtotal.css";

const Subtotal = () => {
  const { basket } = useContext(AppContext);
  const subtotal = basket
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  const itemsCount = basket.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({itemsCount} items): <strong>£{subtotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout </button>
    </div>
  );
};

export default Subtotal;
