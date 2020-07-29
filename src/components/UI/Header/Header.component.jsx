// Import: Dependencies
import React from "react";

// Import: Styling
import "./Header.styles.scss";

// Import: Assets
import { ReactComponent as Logo } from "../../../assets/images/logo/logo-light.svg";
import { ReactComponent as HamburgerIcon } from "../../../assets/images/menu-icon.svg";

// UI: Header
function Header() {
  return (
    <div className="Header">
      <Logo />
      <HamburgerIcon />
    </div>
  );
}

// Export: Header
export default Header;
