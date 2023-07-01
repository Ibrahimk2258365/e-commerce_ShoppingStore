import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shirtpage from "./Pages/Shirtpage";
import Jeanpage from "./Pages/Jeanpage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Loginpage from "./Pages/Loginpage";
import Cartpage from "./Pages/Cartpage";
import SignUpPage from "./Pages/SignUPage";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirtpage" element={<Shirtpage/>} />
        <Route path="/jeans" element={<Jeanpage/>} />
        <Route path="/contactus" element={<Contactpage />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <br />
    </div>
  );
};

export default App;
