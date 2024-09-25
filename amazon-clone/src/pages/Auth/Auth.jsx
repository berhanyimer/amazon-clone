import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase"; // Using v8 Firebase
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import { Type } from "../../Utility/action.types";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation(); // Correctly calling useLocation()

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name === "signIn") {
      setLoading({ ...Loading, signIn: true });
      // Firebase v8 auth signIn
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      // Firebase v8 auth signUp
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && ( // Added null/undefined check for msg
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
        {/* form  */}
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
            {Loading.signIn ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* Agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

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
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
