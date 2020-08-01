// Import: Dependencies
import React, { useEffect } from "react";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

// Import: Styling
import "./NavigationMenu.styles.scss";

// UI: NavigationMenu
function NavigationMenu({ open, setOpen }) {
  // Upon navigation from NavigationMenu, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`NavigationMenu ${open ? `NavigationMenu__open` : null}`}
      open={open}
    >
      <Link to="/" onClick={() => setOpen(!open)}>
        <p>Home</p>
      </Link>
      <Link to="/shop" onClick={() => setOpen(!open)}>
        <p>Shop</p>
      </Link>
      <Link to="/keyboard-guide" onClick={() => setOpen(!open)}>
        <p>Keyboard Guide</p>
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        <p>Contact</p>
      </Link>
      <Link to="/sign-in" onClick={() => setOpen(!open)}>
        <p>Sign In</p>
      </Link>
    </div>
  );
}

// NavigationMenu: TypeChecking
NavigationMenu.propTypes = {
  open: bool.isRequired,
};

// Export: NavigationMenu
export default NavigationMenu;
