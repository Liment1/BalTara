import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <center>
        <div className="tampung">
          <center>
            <div className="tampungjudul">
              <p className="judulfoo">Bali Nusantara</p>
              <p className="judulfoo2">
                Terselip Keindahan di Setiap Kekayaan: Bali Nusantara
              </p>
            </div>
          </center>

          <center>
            <div className="tampung2">
              <img src="./bali.png" alt="bali" className="bali" />
              <p className="copyright">&copy; Group 4 - Bali Nusantara 2024</p>
            </div>
          </center>
        </div>
      </center>
    </div>
  );
}

export default Footer;
