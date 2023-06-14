import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import useTitle from "../../hook/useTitle";
import Footer from '../Footer/Footer';
import "./SignUp.css";
const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, userUpdateProfile, loginProvider } =
    useContext(AuthContext);
  const nevigate = useNavigate();
  useTitle("SignUp");

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    loginProvider(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(name, photoURL, email, password, confirm);
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
        handleUserUpdateProfile(name, photoURL);
        nevigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleUserUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    userUpdateProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
   <div>
     <div className="form-container bg-dark text-white">
      <h2 className="form-title text-light">Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label>
        <Button
          className="googleLogin"
          variant="outline-secondary"
          // style={{ width: "412px"}}
          onClick={handleGoogleSignIn}
        >
          
          <FaGoogle className="me-3 mb-1 fs-2" /> Google
        </Button>
        

        </label>
        <br/>

          <label htmlFor="name">
          Name : 
          <br/>
          <input type="name" name="name"  required />
          </label>
         
        <br/>

        
          <label htmlFor="photoURL">
            PhotoURL :
            <br/>
            <input type="photoURL" name="photoURL"/>

            </label>
        <br/>

        
          <label htmlFor="email">
            Email :
            <br/>
            <input type="email" name="email" required />

            </label>

            <br/>
        

     
          <label htmlFor="password">
            Password : 
            <br/>
            <input type="password" name="password" required />

            </label>
        

        
          <label htmlFor="confirm"> 
          Confirm Password :
          <br/>
          <input type="password" name="confirm" required />

          </label>
        

        <input className="btn-submit" type="submit" value="Sign Up"/>
      </form>
      <br/>
      <p className="text-dark">
        Already have an Account ... <Link to="/login">Login</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
    <Footer/>
   </div>
  );
};

export default SignUp;
