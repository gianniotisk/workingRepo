import React, { useState } from "react";
import "./Login.css";

import CLOSE from "../assets/Login/close.png";
import APPROVE from "../assets/Login/approve.png";
import BUSINESS from "../assets/Login/business.png";

export default function Login({ isOpen, onClose, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      const userData = { username, password };
      localStorage.setItem("user", JSON.stringify(userData)); // Save to local storage
      setUser(userData); // It will show the username on the anvbar
      onClose();
    } else {
      alert("You need to write both a username and password.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-window">
        <button className="modal-close" onClick={onClose}>
          <img src={CLOSE} alt="Close Icon" />
        </button>
        <div className="modal-header">
          <h2>{isRegistered ? "Sign In" : "Log in - Create an Account"}</h2>
        </div>
        <div className="modal-features">
          <div className="feature-item">
            <img src={BUSINESS} alt="Feature Icon" />
            <span>Become Part of the Finch Community</span>
          </div>
          <div className="feature-item">
            <img src={APPROVE} alt="Feature Icon" />
            <span>Get Full Access</span>
          </div>
        </div>
        <div className="modal-input">
          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="continue-btn" onClick={handleLogin}>
            Continue
          </button>
          <p className="terms">
            Terms and Conditions are applied. By continuing, you allow us to
            share your email and entered information with Finch.com.
          </p>
        </div>

        {/* <div className="divider">
          <span>OR</span>
        </div>
        <div className="modal-signin">
          <p>Already have an Account?</p>
          <button
            className="signin-email"
            onClick={() => setIsRegistered(true)}
          >
            Sign in with Email
          </button>
          <button className="signin-google">Sign in with Google</button>
        </div> */}
      </div>
    </div>
  );
}
