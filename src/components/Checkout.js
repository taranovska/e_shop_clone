import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9A/Redmi_9A_Launch/Redmi_9A_Launch_DesktopHero_1500x600._CB404940668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
