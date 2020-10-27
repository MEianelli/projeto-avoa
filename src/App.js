import React from "react";
import "./style.css";

import Mainpage from "./components/Mainpage";
import Products from "./components/Products";

function App() {
  return (
    <Mainpage>
      <Products />
    </Mainpage>
  );
}

export default App;
