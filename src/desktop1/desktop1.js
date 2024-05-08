import React, { useState, useEffect } from "react";
import "./desktop1.css";
import video from "./balivid.mp4";
import nascam from "./nascam.jpg";
import babigul from "./babigul.jpg";
import ayambetu from "./ayambetu.jpg";
import satelilit from "./satelilit.jpeg";
import lawar2 from "./lawar2.jpeg";
import matah1 from "./matah1.jpg";
import bebekgor from "./bebekgor.jpeg";
import satebab from "./satebab.jpg";
import tipatblayag from "./tipatblayag.jpg";
import tepeng2 from "./tepeng2.jpg";
import sateplecing from "./sateplecing.jpg";
import sambalembe from "./sambalembe.jpg";

function Desktop1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [nascam, babigul, ayambetu, satelilit];
  const slides2 = [lawar2, matah1, bebekgor, satebab];
  const slides3 = [tipatblayag, tepeng2, sateplecing, sambalembe];
  const [baltaraText, setBaltaraText] = useState("Bali Nusantara");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    const textInterval = setInterval(() => {
      setBaltaraText((prevText) =>
        prevText === "Bali Nusantara" ? "बाली द्वीपसमूह" : "Bali Nusantara"
      );
    }, 3000);

    showTime();

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  return (
    <div className="desktop1">
      <div id="MyClockDisplay" className="clock"></div>
      <div className="judul">
        <b>
          <h1>Home</h1>
        </b>
      </div>
      <div className="baltara" style={{ cursor: "default" }}>
        <p className="baltaraText">{baltaraText}</p>
      </div>
      <div className="video">
        <div className="row mt-1">
          <div className="col-md desc">
            <h2>Apa itu BalTara ?</h2>
            <br />
            <p className="tekspanjang">
              Bali Nusantara adalah platform daring yang mengajak pengunjung
              untuk menelusuri kuliner dan kebudayaan Pulau Dewata. Dengan fokus
              pada kekayaan rasa dan tradisi kulinernya, situs web ini menjadi
              penunjuk arah yang andal bagi pencinta kuliner yang ingin
              merasakan kelezatan sejati Bali. Dari warung tradisional hingga
              restoran mewah, setiap tempat makan memiliki cerita yang
              memperkaya pengalaman kuliner, sementara artikel-artikel yang
              disajikan memberikan pemahaman yang mendalam tentang kebudayaan
              lokal. Dengan demikian, Bali Nusantara tidak hanya memuaskan
              selera makanan, tetapi juga menginspirasi pengunjung untuk
              menjelajahi keindahan budaya Bali.
            </p>
          </div>
          <div className="col-md-6 video-container">
            <video autoPlay loop muted className="responsive-video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="highlight">
          <p>Highlight</p>
        </div>
        <div className="col-md-4 bgfooter1">
          <div className="slide">
            <div className="pic1">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  style={{
                    display: index === currentSlide ? "block" : "none",
                  }}
                  alt={`Slide ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4 bgfooter2">
          <div className="slide2">
            <div className="pic2">
              {slides2.map((slide, index) => (
                <img
                  key={index}
                  src={slide}                               
                  style={{
                    display: index === currentSlide ? "block" : "none",
                  }}
                  alt={`Slide2 ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-4 bgfooter3">
          <div className="slide3">
            <div className="pic3">
              {slides3.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  style={{
                    display: index === currentSlide ? "block" : "none",
                  }}
                  alt={`Slide3 ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
