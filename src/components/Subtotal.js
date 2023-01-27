import React from "react";
import { getBasketTotal } from "../state_provider/reducer";
import { useStateValue } from "../state_provider/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <h2>Subtotal</h2>
      <p>
        Subtotal ({basket?.length} items):{" "}
        <strong>${getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
