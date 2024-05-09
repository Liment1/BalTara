import logo from "./logo.svg";
import "./App.css";
import Desktop1 from "./desktop1/desktop1.js";
import Desktop4 from "./desktop4/desktop4.js";
import AboutUs from "./desktop5/aboutus.js";
import Navbar from "./navbar/navbar.js";
import Progress from "./progress/progress.js";
import Sounds from "./sounds/sounds";

function App() {
  return (
    <div className="container mw-100">
      <body>
        <Sounds />
      </body>

      <Progress />
      <Navbar />
      <div className="desc1">
        <Desktop1 />
      </div>
      <div className="ad">
        <div className="aboutus">
          <AboutUs />
        </div>
        <Desktop4 />
      </div>
    </div>
  );
}

export default App;
