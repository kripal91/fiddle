import React, { useState } from "react";
import { FaHome, FaRegBookmark, FaRegHeart, FaBriefcase, FaUsers, FaNetworkWired } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiNotePencil } from "react-icons/pi";
import { TiTicket } from "react-icons/ti";
import { RiUserLine, RiMoreLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { MdHomeFilled } from "react-icons/md";
import logo from "../images/logo.png";
import { NavLink, Route, Switch as RouterSwitch } from "react-router-dom"; // Rename Switch to RouterSwitch

import "./Navbar.scss";
import Passes from "./Pass";
import Registration from "./Registration";
import Team from "./Team";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`container ${isMenuOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar">
        <div className="LogoCont">
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="sidebar-links">
          {/* Navigation Links */}
          {/* Home */}
          <li>
            <NavLink to="/" className="link" activeClassName="active">
              <div className="links-div">
                <div className="NavIcon">
                  <MdHomeFilled className="icon" />
                </div>
                <div className="Navname">Home</div>
              </div>
            </NavLink>
          </li>
          {/* Opportunities */}
          <li>
            <NavLink to="/opportunities" className="link" activeClassName="active">
              <div className="links-div">
                <div className="NavIcon">
                  <TbTargetArrow className="icon" />
                </div>
                <div className="Navname">Opportunities</div>
              </div>
            </NavLink>
          </li>
          {/* Your Passes */}
          <li>
            <NavLink to="/passes" className="link" activeClassName="active">
              <div className="links-div">
                <div className="NavIcon">
                  <TiTicket className="icon" />
                </div>
                <div className="Navname">Your Passes</div>
              </div>
            </NavLink>
          </li>
          {/* Your Team */}
          <li>
            <NavLink to="/teams" className="link" activeClassName="active">
              <div className="links-div">
                <div className="NavIcon">
                  <HiOutlineUserGroup className="icon" />
                </div>
                <div className="Navname">Your Team</div>
              </div>
            </NavLink>
          </li>
          {/* Your Registration */}
          <li>
            <NavLink to="/registrations" className="link" activeClassName="active">
              <div className="links-div">
                <div className="NavIcon">
                  <PiNotePencil className="icon" />
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
        {/* Routing */}
        <RouterSwitch>
          <Route exact path="/passes" component={Passes} />
          <Route exact path="/registrations" component={Registration} />
          <Route exact path="/teams" component={Team} />
          {/* Add more routes for other components */}
        </RouterSwitch>
      </div>
    </div>
  );
};

export default Navbar;
