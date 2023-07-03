import React from "react";
import "./Style.css";

import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {

  return (
    <>
      
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="images/Logo.png" alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shirtpage">SHIRTS</Link>
              </li>
              <li>
                <Link to="/jeans">JEANS</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link to="/contactus">CONTACT US</Link>
              </li>
              {/* <li className="cart-icon">
                <Link to="/cart"> <i className="fa fa-shopping-cart"></i> </Link>
              </li> */}
               <li>
                <Link to="/checkout">CHECKOUT</Link>
              </li>
              <li className="user-icon">
                <Link to="/login"> <i className="fa fa-sign-in">Login</i></Link>
              </li>
             
            </ul>
          </nav>
        </div>
      </header>
      
      

    </>
  );
};

export default Header;
