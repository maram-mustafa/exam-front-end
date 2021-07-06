import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Cocktail App</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/fav">Favorite</Link>
        </Navbar>
      </div>
    );
  }
}

export default Header;
