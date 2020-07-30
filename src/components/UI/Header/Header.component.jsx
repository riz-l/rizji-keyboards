// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as LogoLight } from "../../../assets/images/logo/logo-light.svg";
import { ReactComponent as HamburgerIcon } from "../../../assets/images/icons/menu-icon.svg";

// UI: Header
function Header() {
  return (
    <div className="Header">
      <LogoLight />
      <div className="Header__hamburger-menu">
        <HamburgerIcon />
      </div>
    </div>
  );
}

// Export: Header
export default Header;
