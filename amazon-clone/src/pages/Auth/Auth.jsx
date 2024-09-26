import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase"; // Firebase v8 authentication
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import { Type } from "../../Utility/action.types";

function Auth() {
  const [email, setEmail] = useState(""); // State to track email input
  const [password, setPassword] = useState(""); // State to track password input
  const [error, setError] = useState(""); // State to store error messages
  const [Loading, setLoading] = useState({ signIn: false, signUp: false }); // Loading state for buttons
  const [{ user }, dispatch] = useContext(DataContext); // Access user and dispatch from context
  const navigate = useNavigate(); // Hook to navigate programmatically
  const navStateData = useLocation(); // Hook to access location state data

  // Function to handle sign-in or sign-up
  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name === "signIn") {
      setLoading({ ...Loading, signIn: true });
      // Firebase sign-in with email and password
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user }); // Dispatch user data to context
          setLoading({ ...Loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/"); // Navigate after login
        })
        .catch((err) => {
          setError(err.message); // Set error message on failure
          setLoading({ ...Loading, signIn: false });
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      // Firebase sign-up with email and password
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user }); // Dispatch user data to context
          setLoading({ ...Loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/"); // Navigate after sign-up
        })
        .catch((err) => {
          setError(err.message); // Set error message on failure
          setLoading({ ...Loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {/* Display any message passed through location state */}
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        {/* Sign-in form */}
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.login_signInButton}
          >
            {Loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        {/* Disclaimer text */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        {/* Sign-up button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.login_register}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {/* Display any error messages */}
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
