// Import: Dependencies
import React from "react";
import { bool, func } from "prop-types";

// Import: Styles
import "./MenuToggle.styles.scss";

// UI: MenuToggle
function MenuToggle({ open, setOpen }) {
  return (
    <div className="MenuToggle" open={open} onClick={() => setOpen(!open)}>
      <div
        className={`${
          open
            ? `MenuToggle__first-child-open`
            : `MenuToggle__first-child-closed`
        }`}
      />
      <div
        className={`${
          open
            ? `MenuToggle__second-child-open`
            : `MenuToggle__second-child-closed`
        }`}
      />
      <div
        className={`${
          open
            ? `MenuToggle__third-child-open`
            : `MenuToggle__third-child-closed`
        }`}
      />
    </div>
  );
}

// MenuToggle: TypeChecking
MenuToggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

// Export: MenuToggle
export default MenuToggle;
