import "../styles/Home.css";
import { useEffect, useState } from "react";
import Profilebutton from "../components/profilebutton/Profilebutton.js";
import Profiletab from "../components/profiletab/Profiletab.js";
import Profile from "../components/profile";

function Home() {
  const [show, setShow] = useState({ display: "flex" });
  const closeBox = () => {
    setShow({ display: "none" });
  };
  const handleClick = () => {
    setShow({ display: "flex" });
  };
  const [face, setFace] = useState(null)

  return (
    <div className="fullDiv">
      <Profilebutton click={handleClick} />
      {
        !face 
          ? <Profiletab
          name={"verybamboo"}
          tweets={114}
          likes={426}
          click={closeBox}
            show={show}
          />
          : <Profiletab
        picture={`https://avatars.dicebear.com/api/adventurer/${face}.svg?flip=1`}
        name={face}
        tweets={114}
        likes={426}
        click={closeBox}
        show={show}
      />
      }
      <div className="mid">
      </div>
      <div className="right">
      </div>
    </div>
  );
}

export default Home;
