// Import: Dependencies
import React from "react";
import { bool } from "prop-types";

// Import: Styling
import "./NavigationMenu.styles.scss";

// UI: NavigationMenu
function NavigationMenu({ open }) {
  return (
    <div
      className={`NavigationMenu ${open ? `NavigationMenu__open` : null}`}
      open={open}
    >
      <p>Shop</p>
      <p>Keyboard Guide</p>
      <p>Contact</p>
      <p>Sign In</p>
    </div>
  );
}

// NavigationMenu: TypeChecking
NavigationMenu.propTypes = {
  open: bool.isRequired,
};

// Export: NavigationMenu
export default NavigationMenu;
