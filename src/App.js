// Import: Dependencies
import React, { useState, useRef } from "react";

// Import: Hooks
import { useOnClickOutside } from "./hooks";

// Import: Styling
import "./index.css";

// Import: Pages
import Home from "./components/pages/Home/Home.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import Footer from "./components/UI/Footer/Footer.component";

import SideNav from "./components/UI/SideNav/SideNav.component";
import MenuToggle from "./components/UI/MenuToggle/MenuToggle.component";

// Component: App
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <div ref={node}>
        <MenuToggle open={open} setOpen={setOpen} />
        <SideNav open={open} setOpen={setOpen} />
      </div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// Export: App
export default App;
