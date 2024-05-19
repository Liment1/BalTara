import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./navbar.css";
import pura from "./bali.png";
import home from "./home.png";
import foods from "./restaurant.png";
import abtus from "./abtus.png";
import support from "./support.png";
import iconbali from "./iconbali.png";
import { Outlet, Link } from "react-router-dom";
import SoundApp from "../sounds/soundapp";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className="jancoks">
      <SoundApp />
      {!showOffcanvas && (
        <a style={{ "--clr": "#7808d0" }} className="button" href="#" onClick={handleOffcanvasToggle}>
          <span className="button__icon-wrapper">
            <svg
              width="10"
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
            <svg
              className="button__icon-svg button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Menu
        </a>
      )}
      

      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        placement="start"
        style={{ width: "200px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BalTara</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="text-center text-sm menu">Main Menu</h3>
          <hr />
            <div className="mainmenu">
              <Link to="/" className="btn btn-home">
                <img src={home} alt="Home" />
                <span className="home1">Home</span>
              </Link>
              <Link to="/foods/0" className="btn btn-foods">
                <img src={foods} alt="Foods" />
                <span className="foods1">Foods</span>
              </Link>
              <Link to="/abtus" className="btn btn-abtus">
                <img src={abtus} alt="About Us" />
                <span class="abtus1">About Us</span>
              </Link>
            </div>
            <div className="support">
              <Link to="/support" className="btn btn-support">
                <img src={support} alt="Support" />
                <span class="support1">Support Us</span>
              </Link>
            </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <hr className="bottomLine"/>
          <div className="logo2">
            <img src={pura} alt="Bali Temple" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />
    </div>
  );
}

export default App;