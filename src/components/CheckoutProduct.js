import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        alt=""
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(5)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
