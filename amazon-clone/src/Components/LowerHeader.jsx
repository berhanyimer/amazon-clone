import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "../Components/header.module.css"
function LowerHeader() {
  return (
    <>
      <div className={classes.lower_container}>
        <ul>
          <li>
            <AiOutlineMenu />
          </li>
          <li>All</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default LowerHeader;
