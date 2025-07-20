import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "20%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {(localStorage.getItem("token") ||
                sessionStorage.getItem("token")) && (
                <li class="nav-item px-3">
                  <a
                    class="nav-link anchorTagMain"
                    href="#logout"
                    aria-current="page"
                    onClick={(e) => {
                      e.preventDefault();
                      axios.post("https://stocktradingwebsitebackend.onrender.com/logout", {}, { withCredentials: true })
                        .then((res) => {
                          if (res.data.success) {
                            alert("Logged out successfully");
                          } else {
                            alert("Logout failed");
                          }
                        })
                        .catch((err) => { 
                          alert("Error during logout: " + err.message);
                        });
                      // Clear localStorage and sessionStorage  
                      localStorage.clear();
                      sessionStorage.clear(); 
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </a>
                </li>
              )}
              {(!localStorage.getItem("token") &&
                !sessionStorage.getItem("token")) && (
                <li class="nav-item px-3">
                <Link
                  class="nav-link anchorTagMain"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              )}
              <li class="nav-item px-3">
                <Link class="nav-link anchorTagMain" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link
                  class="nav-link anchorTagMain"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link anchorTagMain" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link
                  class="nav-link anchorTagMain"
                  aria-current="page"
                  to="/support"
                >
                  Support
                </Link>
              </li>

              <li className="nav-item px-3 mt-1">
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const token = localStorage.getItem("token"); // or check cookies
                    if (token) {
                      window.location.href = "https://stocktradingwebsitedashboard.onrender.com"; // dashboard URL
                    } else {
                      alert("Please log in to access the dashboard.");
                      // Optionally redirect to login page:
                      navigate("/login");
                    }
                  }}
                >
                  <img
                    src="media/images/kiteLogo.png"
                    style={{ width: "25%" }}
                    alt="Dashboard"
                  />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
