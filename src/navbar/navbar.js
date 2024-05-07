import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import './navbar.css';
import pura from "./bali.png";
import home from "./home.png";
import foods from "./restaurant.png";
import abtus from "./abtus.png";
import support from "./support.png";
import iconbali from "./iconbali.png";
import music from "./ratuanom.mp3";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // State untuk menentukan apakah musik sedang diputar atau tidak

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    const audioPlayer = document.getElementById('audioPlayer'); // Dapatkan elemen audio menggunakan ID
    if (isMusicPlaying) {
      audioPlayer.pause(); // Jika sedang diputar, jeda musik
    } else {
      audioPlayer.play(); // Jika sedang dijeda, mainkan musik
    }
  };

  return (
    <div className="jancoks">
      {!showOffcanvas && ( 
        <button className="btn btn-secondary" type="button" onClick={handleOffcanvasToggle}>
          <img src={iconbali} alt="iconbali" />
        </button>
      )}

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="start" style={{ width: '200px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BalTara</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button className="btn  musik" onClick={toggleMusic}>
            {isMusicPlaying ? "Pause Music" : "Play Music"}
          </button>
          <audio id="audioPlayer" src={music} autoPlay loop /> 
          <h3 className="text-center text-sm menu">Main Menu</h3>
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
            <img src={pura} alt="Bali Temple" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;
