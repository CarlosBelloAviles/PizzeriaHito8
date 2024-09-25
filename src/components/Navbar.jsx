import React from "react";
import {  Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { contador } from "../utils/contador";

const Navbar = () => {
  const { getTotal } = useCart();
  const total = getTotal();
  const { token, logout } = useUser();
  const ClassActive = ({isActive}) => (isActive ? "Active" : "Inactive" )

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pizzería Mamma Mia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"12px"}}>
              <li className="nav-item">
                <NavLink className={ClassActive} to="/" >
                  🍕 Home
                </NavLink>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink className={ClassActive} to="/profile
                    " >
                      🔓 Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link active btn btn-link"
                      onClick={logout}
                    >
                      🔐Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className={ClassActive} to="/login" >
                      🔐 Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={ClassActive} to="/register">
                      🔐 Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <NavLink className={ClassActive} to="/cart">
              🛒 Total: ${contador(total)}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
