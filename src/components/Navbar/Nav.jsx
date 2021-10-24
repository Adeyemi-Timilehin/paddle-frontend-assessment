import React from "react";
import {BrowserRouter as Router,Link } from "react-router-dom";
import "./Navbar.css"
function Nav() {
  return (
    <div>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light mt-4">
  <Link className="navbar-brand logo pt-3" id="logo" to="/">PEDDLE</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <Link className="nav-link" to="#">About <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">FAQS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Testimonials</Link>
      </li>
   
    </ul>
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <Link className="nav-link" to="#" id="signin">Sign ln <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#" id="signup">Sign Up</Link>
      </li>
    </ul>
  </div>
</nav>
      </Router>
    </div>
  );
}

export default Nav;
