import React from "react";
import "./style.css";

import Mainpage from "./components/Mainpage";
import Products from "./components/Products";
/* import P5Wrapper from "react-p5-wrapper";
import sketch from "./components/Mainpage/sketch.js"; */

function App() {
  return (
    <Mainpage>
      <Products />
      {/* <P5Wrapper sketch={sketch}></P5Wrapper> */}
    </Mainpage>
  );
}

export default App;
