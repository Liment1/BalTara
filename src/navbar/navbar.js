import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./navbar.css";
import pura from "./bali.png";
import home from "./home.png";
import foods from "./restaurant.png";
import abtus from "./abtus.png";
import support from "./support.png";
import iconbali from "./iconbali.png";
<<<<<<< Updated upstream
import {Outlet, Link} from "react-router-dom";
=======
import music from "./ratuanom.mp3";
import { Outlet, Link } from "react-router-dom";
>>>>>>> Stashed changes

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
      {!showOffcanvas && (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleOffcanvasToggle}
        >
          <img src={iconbali} alt="iconbali" />
        </button>
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
          {/* Musik dimainkan secara otomatis tanpa tombol kontrol */}
          <h3 className="text-center text-sm menu">Main Menu</h3>
          <hr />
          <div className="d-grid">
            <div className="mainmenu">
<<<<<<< Updated upstream
              <Link to="/" className="btn btn-home">
                  <img src={home} alt="Home"/>
                  <span className="home1">Home</span>
              </Link>
              <Link to="/foods/0" className="btn btn-foods">
                <img src={foods} alt="Foods"/>
=======
              <Link to="/">
                <a href="/home" className="btn btn-home">
                  <img src={home} alt="Home" />
                  <span className="home1">Home</span>
                </a>
              </Link>
              <a href="/foods" className="btn btn-foods">
                <img src={foods} alt="Foods" />
>>>>>>> Stashed changes
                <span className="foods1">Foods</span>
              </Link>
              <Link to="/abtus" className="btn btn-abtus">
                <img src={abtus} alt="About Us" />
                <span class="abtus1">About Us</span>
              </Link>
            </div>
<<<<<<< Updated upstream
            <div className="support">
              <Link to="/support" className="btn btn-support">
                <img src={support} alt="Support" />
                <span class="support1">Support Us</span>
              </Link>
            </div>
=======
            <Link to="/support">
              <div className="support btn btn-support">
                <a href="/support" className="btn btn-support">
                  <img src={support} alt="Support" />
                  <span className="support1">Support Us</span>
                </a>
              </div>
            </Link>
>>>>>>> Stashed changes
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
          <hr />
          <div className="logo2">
            <img src={pura} alt="Bali Temple" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
<<<<<<< Updated upstream
    <Outlet/>
=======
      <Outlet />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
