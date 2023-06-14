import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import  { AuthContext } from "../../context/UserContext";
import logo from "../../images/dexo-Mart.png";
import { FaBeer } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  return (
    <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <img className="logo-image" src={logo} alt="" />
        
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="gap-4 fs-5 text-center">
          <Link className="text-white" style={{ textDecoration: "none" }} to="/">Home</Link>
            <Link className="text-white" style={{ textDecoration: "none" }} to="/shop">Shop</Link>
            <Link className="text-white" style={{ textDecoration: "none" }} to="/orders">Orders</Link>
            {/* <Link className="text-white" style={{ textDecoration: "none" }} to="/inventory">Inventory</Link> */}
            <Link className="text-white" style={{ textDecoration: "none" }} to="/about">About</Link>
            {user?.uid ? (
              <>
                <button className="btn-logout" onClick={logOut}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link className="text-white" style={{ textDecoration: "none" }} to="/login">Login</Link>
                <Link className="text-white" style={{ textDecoration: "none" }} to="/signup">SignUp</Link>
              </>
            )}
            {
              user?.photoURL ?
              <>
              <Image src={user.photoURL} roundedCircle style={{height:'40px'}}/>
              </>
              :
              <>
               {/* <FaBeer/> */}
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
