import Landing from "./screens/Landing.jsx";
import Home from "./screens/Home.jsx";

import Profile from "./components/profile";

import ErrorPage from "./screens/Error";
import React from "react";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
<>
    <div className="fullDiv">
      <Profilebutton click={handleClick} />
      <Profiletab
        name={"verybamboo"}
        tweets={114}
        likes={426}
        click={closeBox}
        show={show}
      />
      <div className="mid">
        <Profile />
      </div>
      <div className="right">3</div>
    </div>
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
                                 </>

  );
}

export default App;
