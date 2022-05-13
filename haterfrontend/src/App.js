import Landing from "./screens/Landing.jsx";
import Home from "./screens/Home.jsx";
import ProfilePage from "./screens/ProfilePage.jsx";
import ErrorPage from "./screens/Error";
import React from "react";
import SignUp from "./screens/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import SmallProfilePage from "./screens/smallProfilePage.jsx";
import PersistProfile from "./components/persistProfile.jsx";
import CommentSection from "./components/comments/CommentSection.jsx";
function App() {
  return (
    <>
      <PersistProfile></PersistProfile>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route
          path="/profile/:ID"
          element={<SmallProfilePage></SmallProfilePage>}
        ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route
          path="/commentSection/:hateid"
          element={<CommentSection></CommentSection>}
        ></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
