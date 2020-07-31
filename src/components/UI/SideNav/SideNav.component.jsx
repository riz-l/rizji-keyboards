// Import: Dependencies
import React from "react";
import { bool } from "prop-types";

// Import: Styling
import "./SideNav.styles.scss";

// UI: SideNav
function SideNav({ open }) {
  return (
    <div className={`SideNav ${open ? `SideNav__open` : null}`} open={open}>
      <p>Shop</p>
      <p>Keyboard Guide</p>
      <p>Contact</p>
      <p>Sign In</p>
    </div>
  );
}

// SideNav: TypeChecking
SideNav.propTypes = {
  open: bool.isRequired,
};

// Export: SideNav
export default SideNav;
