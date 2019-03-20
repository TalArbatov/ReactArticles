import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavItem } from 'react-materialize'
const NavbarButton = ({ to, text }) => {
  return (
      <NavItem>
              <Link to={to}>

        {text}
        </Link>
      </NavItem>

  );
};

NavbarButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavbarButton;
