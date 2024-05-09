import React, { useEffect } from "react";
import "./aboutus.css"; // Pastikan CSS untuk komponen diimpor
import Swiper from "swiper";
import instagram from "./ig.png";

const AboutUs = () => {
  useEffect(() => {
    // Inisialisasi Swiper setelah komponen dimuat
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
    // Jangan lupa membersihkan Swiper jika komponen dihapus
    return () => {
      swiper.destroy();
    };
  }, []); // Inisialisasi hanya sekali setelah komponen dimuat

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
                  <img src="/images/weli.jpg" alt="Welliam Prasetio Hoedoto" />
                </div>
                <div className="t-b-text">
                  <strong>Welliam Prasetio Hoedoto</strong>
                  <span>Project Manager</span>
                  <div className="team-social">
                    <a href="https://www.instagram.com/wellplayd">
                      <i>
                        <img className="ig" src={instagram} alt="ig" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <div className="t-b-img">
                  <img src="/images/richie.jpg" alt="Richie Giansanto" />
                </div>
                <div className="t-b-text">
                  <strong>Richie Giansanto</strong>
                  <span>00000076847</span>
                  <div className="team-social">
                    <a href="https://www.instagram.com/gric_14">
                      <i>
                        <img className="ig" src={instagram} alt="ig" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <div className="t-b-img">
                  <img src="/images/keisen.jpg" alt="Keisen Susanto" />
                </div>
                <div className="t-b-text">
                  <strong>Keisen Susanto</strong>
                  <span>00000078136</span>
                  <div className="team-social">
                    <a href="https://www.instagram.com/keisen_susantoo">
                      <i>
                        <img className="ig" src={instagram} alt="ig" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="team-box">
                <div className="t-b-img">
                  <img src="/images/ricat.jpg" alt="Richard Giansanto" />
                </div>
                <div className="t-b-text">
                  <strong>Richard Giansanto</strong>
                  <span>00000076941</span>
                  <div className="team-social">
                    <a href="https://www.instagram.com/gchrd08">
                      <i>
                        <img className="ig" src={instagram} alt="ig" />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End Swiper Wrapper */}
        </div>{" "}
        {/* End Swiper Container */}
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
    </div>
  );
};

export default AboutUs;
