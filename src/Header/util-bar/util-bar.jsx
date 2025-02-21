import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./util-bar.css";

import Search_Bar from "./search-bar";
import Login from "../../Login/Login";

import LOGO from "../../assets/Header/Logo.png";
import SIGNIN from "../../assets/Header/Signin.png";

export default function Util_Bar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="util-bar">
      <div className="container">
        {/* ----------- Logo Icon-------------- */}
        <Link to="/">
          <img className="header-pic" src={LOGO} alt="Finch Logo" />
        </Link>

        {/* ----------- Search Bar ------------ */}
        <Search_Bar />

        {/* ----------- Signin/Logout Icon ----------- */}
        {user ? (
          <div className="user-info">
            <span className="navBarUsername">{user.username}</span>
            <button onClick={handleLogout} className="logoutButton">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => setIsLoginOpen(true)} className="loginButton">
            <img className="header-pic" src={SIGNIN} alt="Sign In" />
          </button>
        )}

        <Login
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          setUser={setUser}
        />
      </div>
    </div>
  );
}
