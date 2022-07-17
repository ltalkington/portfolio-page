import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
  return (
    <div className="nav-bar2">
      <div class="topnav">
        <NavLink activeclassname="active" className="active-link" to="/">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" /> Home
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> About
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          Portfolio
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> Contact
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
