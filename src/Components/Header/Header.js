import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../context/UserContext";
import logo from "../../images/Logo.svg";

const Header = () => {
  const { user, logOut } = UserContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src={logo} alt="" />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="gap-4 fs-5 text-center">
            <Link className="text-white" style={{ textDecoration: "none" }} to="/">Shop</Link>
            <Link className="text-white" style={{ textDecoration: "none" }} to="/orders">Orders</Link>
            <Link className="text-white" style={{ textDecoration: "none" }} to="/inventory">Inventory</Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
