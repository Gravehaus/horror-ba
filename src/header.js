import React from "react";
import Navbar from 'react-bootstrap/Navbar'

// import { NavLink } from "react-router-dom";




function Header() {
  return (
    <Navbar>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  

  );
}
export default Header;