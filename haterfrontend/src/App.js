import "./App.css";
import Profile from "./components/profile";
import Hates from "./components/hates";

function App() {
  return (
    <div className="fullDiv">
      <div className="left">1</div>
      {/*<div className="mid">2</div>*/}
      <Profile />
      <div className="right">3</div>
    </div>
  );
}

export default App;
