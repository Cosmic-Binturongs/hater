import Landing from "./screens/Landing.jsx";
import Home from "./screens/Home.jsx";
import ErrorPage from "./screens/Error";
import React from "react";
import SignUp from "./screens/SignUp.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
