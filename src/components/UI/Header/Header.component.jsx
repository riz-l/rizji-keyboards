// Import: Dependencies
import React from "react";
import { bool, func } from "prop-types";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as LogoLight } from "../../../assets/images/logo/logo-light.svg";

// UI: Header
function Header({ open, setOpen }) {
  return (
    <div className="Header">
      <LogoLight />
      <div
        className="Header__hamburger-menu"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${
            open
              ? `Hamburger__first-child-open`
              : `Hamburger__first-child-closed`
          }`}
        />
        <div
          className={`${
            open
              ? `Hamburger__second-child-open`
              : `Hamburger__second-child-closed`
          }`}
        />
        <div
          className={`${
            open
              ? `Hamburger__third-child-open`
              : `Hamburger__third-child-closed`
          }`}
        />
      </div>
    </div>
  );
}

// Header: TypeChecking
Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

// Export: Header
export default Header;
