import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
      <section>
        <section>
          <div>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery location */}
            <span>{/* icon  */}</span>
          </div>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
          <div>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon  */}
          </div>
          {/* right side link  */}
          <div>
            <div>
              <section>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <option value="EN">EN</option>
              </section>

              {/* Right side links */}
              <div>
                {/* Three components */}
                <a href="">
                  <div>
                    <span>Sign In</span>
                  </div>
                  <span>Account & Lists</span>
                </a>

                <a href="">
                  <div>
                    <span>Returns</span>
                  </div>
                  <span>& Orders</span>
                </a>

                {/* Cart */}
                <a href="">
                  <div>
                    <span>Cart</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
