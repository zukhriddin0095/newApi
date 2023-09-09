import { NavLink } from "react-router-dom";
import "./header.scss";

import React, { Component, Fragment } from "react";

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="container">
            <ul className="navbar">
              <li >
                <NavLink className="nav__link" to="/">
                  Home
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/Business">
                  Busniss
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/EntertainmentPage">
                  Entertainment
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/General">
                  General
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/Health">
                  Health
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/Science">
                  Science
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/Sports">
                  Sports
                </NavLink>
              </li >
              <li >
                <NavLink className="nav__link" to="/Technology">
                  Technology
                </NavLink>
              </li >
            </ul>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
