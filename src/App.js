import "./App.css";
import Desktop1 from "./desktop1/desktop1.js";
import Desktop2 from "./desktop2/desktop2.js";
import Desktop3 from "./desktop3/Desk3.js";
import Desktop4 from "./desktop4/desktop4.js";
import AboutUs from "./desktop5/aboutus.js";
import Navbar from "./navbar/navbar.js";
import Progress from "./progress/progress.js";
import Sounds from "./sounds/sounds";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container mw-100">
      <BrowserRouter>
        <Sounds />
        <Progress />
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<div>
                  <Desktop1/>
                  <Desktop2/>
                </div>}/>
              <Route path="foods/:id" element={<Desktop3/>}/>
              <Route path="abtus" element={<AboutUs/>}/>
              <Route path="support" element={<Desktop4/>}/>
            </Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
