import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="header__logo">
          <StorefrontIcon fontSize="large" className="header__logoImage" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none", color: "black" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon fontSize="large" className="itemBasket" />
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
