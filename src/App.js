// Import: Dependencies
import React, { useState, useRef } from "react";
import { Switch, Route } from "react-router-dom";

// Import: Hooks
import { useOnClickOutside } from "./hooks";

// Import: Styling
import "./index.css";

// Import: Pages
import Home from "./components/pages/Home/Home.component";
import KeyboardGuide from "./components/pages/KeyboardGuide/KeyboardGuide.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";
import Footer from "./components/UI/Footer/Footer.component";
import NavigationMenu from "./components/UI/NavigationMenu/NavigationMenu.component";

// Component: App
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <div ref={node}>
        <NavigationMenu open={open} setOpen={setOpen} />
        <Header open={open} setOpen={setOpen} />
      </div>
      <Switch>
        <Route exact path="/">
          <Home open={open} />
        </Route>
        <Route path="/shop" component={Home} />
        <Route path="/keyboard-guide">
          <KeyboardGuide open={open} />
        </Route>
        <Route path="/contact" component={Home} />
        <Route path="/sign-in" component={Home} />
      </Switch>
      <Footer open={open} />
    </div>
  );
}

// Export: App
export default App;
