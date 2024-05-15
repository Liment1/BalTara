import React, { useState, useEffect } from "react";
import "./footer.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 500; // Change this value according to your needs

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? "fade-in" : ""}`}>
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
