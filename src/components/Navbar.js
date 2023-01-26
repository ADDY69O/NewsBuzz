import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsBuzz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#isai"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="isai"
            style={{ flexDirection: "row", justifyContent: "right" }}
          >
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active" id="isai">
            <Link className="nav-link" to="/">Home </Link>
          </li> */}

              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item" id="isai">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
