import Landing from "./screens/Landing.jsx";
import Home from "./screens/Home.jsx";
import ProfilePage from "./screens/ProfilePage.jsx";
import ErrorPage from "./screens/Error";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
