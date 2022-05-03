import "./App.css";
import { useEffect, useState } from "react";
import Profilebutton from "./components/profilebutton/Profilebutton.js";
import Profiletab from "./components/profiletab/Profiletab.js";

function App() {
  const [show, setShow] = useState({ display: "none" });
  const closeBox = () => {
    setShow({ display: "none" });
  };
  const handleClick = () => {
    setShow({ display: "flex" });
  };
  return (
    <div className="fullDiv">
      <Profilebutton click={handleClick} />
      <Profiletab
        name={"verybamboo"}
        tweets={114}
        likes={426}
        click={closeBox}
        show={show}
      />

      <div className="mid">2</div>
      <div className="right">3</div>
    </div>
  );
}

export default App;
