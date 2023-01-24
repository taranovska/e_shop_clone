import React from "react";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <h2>Subtotal</h2>
      <p>
        Subtotal (0 items): <strong>$0.00</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
