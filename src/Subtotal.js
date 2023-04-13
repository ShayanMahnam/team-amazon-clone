import React from "react";
import "./Subtotal.css";
// import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./reducer";
const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const subtotal = getBasketTotal(basket);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket?.length} items): <strong>£{subtotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contain a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};
