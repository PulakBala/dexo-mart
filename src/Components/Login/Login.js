import React from "react";
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import useTitle from "../../hook/useTitle";
import Footer from "../Footer/Footer";

import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="form-container bg-dark text-white " style={{ height: "500px" }}>
        <br/>
        <h2 className="form-title text-white me-5">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <br/>
            Email :
            <br />
            <input type="email" name="email" required />
          </label>
          <br /><br/>

          <label htmlFor="password">
            Password :
            <br />
            <input type="password" name="password" required />
          </label>

          <input className="btn-submit  text-white fs-2" type="submit" value="Login" />
        </form>
        <br/>
        <p>
          New to ema john <Link to="/signup">Create a New Account</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
