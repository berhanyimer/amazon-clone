import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Componenets/Layout/LayOut";
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import ProductCard from "../../Componenets/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

function Payment() {
  // Get user and basket from context
  const [{ user, basket }] = useContext(DataContext);

  // Calculate total number of items in basket
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // Calculate total price of items in basket
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  // Stripe setup and state for handling card errors
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle changes in the CardElement and set card error if any
  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = (e) => {
    e.preventDefault();
    //1.contact  backend || function to get the client secrete



    //2.react side confirmation using stripe



    //3.after confirmation --> order firestore db save, clear basket

    
  };

  return (
    <LayOut>
      {/* Header with total items in checkout */}
      <div className={classes.payment_header}>Checkout ({totalItem})</div>

      <section className={classes.container_wrapper}>
        {/* User's delivery address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>{user ? user.email : "Guest User"}</div>
          <div>123 West End Ave</div>
          <div>Addis Ababa</div>
        </div>
        <hr />

        {/* List of products in the basket */}
        <div className={classes.flex}>
          <h3>Review Items and Delivery Address</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* Payment methods section */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* Display card error if any */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* Stripe CardElement for card input */}
                <CardElement onChange={handleChange} />

                {/* Total order amount and Pay Now button */}
                <div>
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
