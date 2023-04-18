import React, { useContext } from "react";
import { AppContext } from "./App";
import "./Subtotal.css";

const Subtotal = () => {
  const { basket } = useContext(AppContext);
  const subtotal = basket.reduce((a, b) => a + b.price, 0).toFixed(2);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): <strong>£{subtotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contain a gift
      </small>
      <button>Proceed to Checkout </button>
    </div>
  );
};

export default Subtotal;
