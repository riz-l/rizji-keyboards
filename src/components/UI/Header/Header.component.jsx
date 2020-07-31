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
        className="Header__nav-toggle"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${
            open
              ? `Header__nav-toggle-first-child-open`
              : `Header__nav-toggle-first-child-closed`
          }`}
        />
        <div
          className={`${
            open
              ? `Header__nav-toggle-second-child-open`
              : `Header__nav-toggle-second-child-closed`
          }`}
        />
        <div
          className={`${
            open
              ? `Header__nav-toggle-third-child-open`
              : `Header__nav-toggle-third-child-closed`
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
