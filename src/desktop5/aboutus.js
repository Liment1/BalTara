import React, { useEffect } from "react";
import "./aboutus.css";
import Swiper from "swiper";
import Footer from "../footer/footer";
import richie from "../images/richie.jpg";
import ricat from "../images/ricat.jpg";
import weli from "../images/weli.jpg";
import keisen from "../images/keisen.jpg";


const AboutUs = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: -20,
        depth: 120,
        modifier: 1,
        slideShadows: true,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
      <div>
        <section id="team">
          <div className="team-heading">
            <h3>Meet Our Team</h3>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="team-box">
                  <div className="t-b-img">
                    <img src={weli} alt="Welliam Prasetio Hoedoto" />
                  </div>
                  <div className="t-b-text">
                    <center>
                      <strong>Welliam Prasetio H</strong>
                    </center>
                    <span>Project Manager</span>
                    <div className="team-social">
                      <a href="https://www.instagram.com/welliampras">
                        <button className="Btn">
                        <span className="svgContainer">
                          <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </span>
                          <span className="BG"></span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat the same for other team members */}
              <div className="swiper-slide">
                <div className="team-box">
                  <div className="t-b-img">
                    <img src={richie} alt="Richie Giansanto" />
                  </div>
                  <div className="t-b-text">
                    <center>
                      <strong>Richie Giansanto</strong>
                    </center>
                    <span>00000076847</span>
                    <div className="team-social">
                      <a href="https://www.instagram.com/gric_14">
                        <button className="Btn">
                        <span className="svgContainer">
                          <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </span>
                          <span className="BG"></span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="team-box">
                  <div className="t-b-img">
                    <img src={keisen} alt="Keisen Susanto" />
                  </div>
                  <div className="t-b-text">
                    <center>
                      <strong>Keisen Susanto</strong>
                    </center>
                    <span>00000078136</span>
                    <div className="team-social">
                      <a href="https://www.instagram.com/keisen_susantoo">
                        <button className="Btn">
                        <span className="svgContainer">
                          <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </span>
                          <span className="BG"></span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="team-box">
                  <div className="t-b-img">
                    <img src={ricat} alt="Richard Giansanto" />
                  </div>
                  <div className="t-b-text">
                    <center>
                      <strong>Richard Giansanto</strong>
                    </center>
                    <span>00000076941</span>
                    <div className="team-social">
                      <a href="https://www.instagram.com/gchrd08">
                        <button className="Btn">
                        <span className="svgContainer">
                          <svg
                              fill="white"
                              className="svgIcon"
                              viewBox="0 0 448 512"
                              height="1.5em"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                        </span>
                          <span className="BG"></span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </section>

        <div className="description1">
          <p className="desc1abt">More About Us</p>
          <p className="desc2abt">
            Kami merupakan mahasiswa Informatika dari Universitas Multimedia
            Nusantara angkatan 2023, yang beranggotakan Welliam Prasetio Hoedoto,
            Richie Giansanto, Keisen Susanto, dan Richard Giansanto. Project web
            ini adalah project untuk memenuhi Ujian Akhir Semester dari mata
            kuliah Intro to Internet Technology. Kami mempersembahkan web ini
            sebagai hasil kerja keras yang kami lakukan untuk membuat website
            dengan desain semenarik mungkin.
          </p>
        </div>
        <Footer />
      </div>
  );
};

export default AboutUs;
