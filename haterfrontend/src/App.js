import "./App.css";
import Profile from "./components/profile";


function App(props) {


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
