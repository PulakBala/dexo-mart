import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./SignUp.css";
const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, userUpdateProfile } = useContext(AuthContext);
  const nevigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoURL, email, password,confirm)
    if (password.length < 6) {
      setError("Password should be 6 characters or more");
      return;
    }
    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUserUpdateProfile(name, photoURL)
        nevigate('/')
      })
      .catch((error) => console.error(error));
  };

  const handleUserUpdateProfile =(name, photoURL)=>{
   const  profile = {
        displayName : name,
        photoURL : photoURL
    }
    userUpdateProfile(profile)
    .then(() => {})
    .catch(error => console.error(error));
  }


  return (
    <div className="form-container" >
      <h2 className="form-title">Sign Up</h2>

      <form onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="email">Name</label>
          <input type="name" name="name" required />
        </div>

        <div className="form-control">
          <label htmlFor="email">PhotoURL</label>
          <input type="PhotoURL" name="photoURL"  />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>

        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>

        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an Account <Link to="/login">Login</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
