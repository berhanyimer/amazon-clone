import React from "react";
import classes from "./Header.module.css"; // Importing as a CSS module
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
    <section className={classes.header_container}>
      {/* Logo section */}
      <div className={classes.logo_container}>
        <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </a>
      </div>

      {/* Delivery section */}
      <div className={classes.delivery}>
        <span>
          <SlLocationPin />
        </span>
        <div>
          <p>Deliver to</p>
          <span>Ethiopia</span>
        </div>
      </div>

      {/* Search section */}
      <div className={classes.search}>
        <select>
          <option value="All">All</option>
        </select>
        <input type="text" placeholder="Search" size="25" />
        <BsSearch size={25} />
      </div>

      {/* Right side (Language, Account, Cart) */}
      <div className={classes.order_container}>
        <div className={classes.language}>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt="US Flag"
            />
          </a>
          <select>
            <option value="EN">EN</option>
          </select>
        </div>

        <a href="/">
          <p>Sign In</p>
          <span>Account & Lists</span>
        </a>

        <a href="/">
          <p>Returns</p>
          <span>& Orders</span>
        </a>

        {/* Cart section */}
        <a href="/" className={classes.cart}>
          <BiCart size={35} />
          <span>0</span>
        </a>
      </div>
    </section>
    <LowerHeader/>
    </>
  );
};

export default Header;
