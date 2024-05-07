import logo from "./logo.svg";
import "./App.css";
import Desktop1 from "./desktop1/desktop1.js";
import Desktop4 from "./desktop4/desktop4.js";
import Navbar from "./navbar/navbar.js";
import Progress from "./progress/progress.js";


function App() {
  return (
    <div className="container mw-100">
        <Progress />
        <Navbar />
    <div className="desc1">
        <Desktop1 />
      </div>
      <div className="ad">
        <Desktop4 />
      </div>
    </div>
  );
}

export default App;