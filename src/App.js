// Import: Dependencies
import React from "react";

// Import: Styling
import "./index.css";

// Import: Pages
import Home from "./components/pages/Home/Home.component";

// Import: UI
import Header from "./components/UI/Header/Header.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

// Export: App
export default App;
