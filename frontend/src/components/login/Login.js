import { useEffect, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {  loginUser } from "../../Service/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);
      // Handle successful login, redirect or show a success message
    } catch (error) {
      console.log("Error during login:", error);
      // Handle login error, display an error message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Sign in to your account</h2>
        <div className="input-container">
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={handleUsername}
          />
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit" className="s-button">
          Sign in
        </button>

        <p className="signup-link">
          Don't have an account?
          <Link to="/signup" className="signup-link-text">
            Sign up
          </Link>
          <br/>
          <div className="div-fig">
    <a href='https://www.facebook.com/' className="social-icon"><FontAwesomeIcon icon={faFacebookF} className="fig1" /></a>
    <a href='https://www.instagram.com/' className="social-icon"><FontAwesomeIcon icon={faInstagram} className="fig2" /></a>
    <a href='https://www.google.com/' className="social-icon"><FontAwesomeIcon icon={faGoogle} className="fig3" /></a>
  </div>
        </p>
      </form>
   
    </div>
  );
}

export default Login;
