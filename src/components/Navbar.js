import React, { useState } from "react";
import { FaHome, FaRegBookmark, FaRegHeart, FaBriefcase, FaUsers, FaNetworkWired } from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";
import logo from "../images/logo.png";
import Passes from "./Pass";
import Registration from "./Registration";
import Team from "./Team";

import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`container ${isMenuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar">
          <div className="LogoCont">
            <img src={logo} alt="logo" />
          </div>
          <ul className="sidebar-links">
            {/* Navigation Links */}
            <li>
              <NavLink to="/" className="link" activeClassName="active">
                <div className="links-div">
                  <div className="NavIcon">
                    <FaHome className="icon" />
                  </div>
                  <div className="Navname">Home</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/opportunities" className="link" activeClassName="active">
                <div className="links-div">
                  <div className="NavIcon">
                    <FaNetworkWired className="icon" />
                  </div>
                  <div className="Navname">Opportunities</div>
                </div>
              </NavLink>
            </li>
            {/* Your Passes */}
            <hr className="divider"></hr>
            <h2>You</h2>
            <li>
              <NavLink to="/passes" className="link" activeClassName="active">
                <div className="links-div">
                  <div className="NavIcon">
                    <FaRegBookmark className="icon" />
                  </div>
                  <div className="Navname">Your Passes</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" className="link" activeClassName="active">
                <div className="links-div">
                  <div className="NavIcon">
                    <FaUsers className="icon" />
                  </div>
                  <div className="Navname">Your Team</div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/registrations" className="link" activeClassName="active">
                <div className="links-div">
                  <div className="NavIcon">
                    <FaBriefcase className="icon" />
                  </div>
                  <div className="Navname">Registration</div>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="creator-card ">
            <h3>Become a Creator</h3>
            <p>It's easy, we'll help you</p>
            <button>Create Opportunity</button>
          </div>
          <p>©️RowX 2024</p>
        </div>

        <div className="content">
          <Routes>
            <Route exact path="/passes" element={<Passes />} />
            <Route exact path="/registrations" element={<Registration />} />
            <Route exact path="/teams" element={<Team />} />
          </Routes>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <NavLink to="/" className="footer-icon">
          <FaHome />
        </NavLink>
        <NavLink to="/opportunities" className="footer-icon">
          <FaNetworkWired />
        </NavLink>
        <NavLink to="/passes" className="footer-icon">
          <FaRegBookmark />
        </NavLink>
        <NavLink to="/teams" className="footer-icon">
          <FaUsers />
        </NavLink>
        <NavLink to="/registrations" className="footer-icon">
          <FaBriefcase />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
