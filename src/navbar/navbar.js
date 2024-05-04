import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import './navbar.css';
import pura from "./bali.png";
import home from "./home.png";
import foods from "./restaurant.png";
import abtus from "./abtus.png";
import support from "./support.png";
import iconbali from "./iconbali.png";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div className="jancoks">
      <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <img src={iconbali} alt="iconbali" />
      </button>

      <div className="offcanvas offcanvas-start rounded-end-4 custom-offcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header logo">
          <img src={pura} alt="Bali Temple" className="img-fluid" />
          <h5 className="offcanvas-title text-center text-sm">BalTara</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <input type="search" className="form-control custom-search mb-3" placeholder="Search..." />
          <h3 className="text-center text-sm">Main Menu</h3>
          <hr />
          <div className="d-grid">
            <div className="mainmenu">
              <a href="/home" className="btn btn-home">
                <img src={home} alt="Home" />
                <span className="home1">Home</span>
              </a>
              <a href="/foods" className="btn btn-foods">
                <img src={foods} alt="Foods" />
                <span className="foods1">Foods</span>
              </a>
              <a href="/abtus" className="btn btn-abtus">
                <img src={abtus} alt="About Us" />
                <span className="abtus1">About Us</span>
              </a>
            </div>
            <div className="support">
              <a href="/support" className="btn btn-support">
                <img src={support} alt="Support" />
                <span className="support1">Support Us</span>
              </a>
            </div>
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
            <img src={pura}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
