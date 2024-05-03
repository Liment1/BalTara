import React from 'react';
import './desktop1.css';
import bali from './balikecil.jpg';


function Desktop1() {
    return (
        <div className="desktop1">
            <div className="container">
                <div className="judul">
                <b><h1>Home</h1></b>
                <b><h1>Bali Nusantara</h1></b>
                </div>
                <div className="footer">
                    <div id="konten" className="row mt-3">
                        <div className="col-md">
                            <img src={bali} className="img-fluid rounded-3" alt="Banner" />
                        </div>
                        <div className="col-md balik">
                            <h2>Subtitle Here</h2>
                            <p>Bali, pulau surga di Indonesia, tidak hanya menawarkan keindahan alam yang memukau tetapi juga menyajikan warisan kuliner yang kaya dan lezat. Dari Babi Guling yang terkenal hingga Ayam Betutu yang meriah dengan rempah-rempah khas Bali, setiap hidangan mencerminkan kekayaan budaya dan tradisi lokal. Rasakanlah sensasi Lawar yang khas dengan daging cincang dan rempah, atau nikmati kelezatan Sate Lilit yang dipanggang dengan cita rasa harum rempah-rempah. Bali tidak hanya memanjakan mata dengan keindahan alamnya, tetapi juga menyajikan pengalaman kuliner yang tak terlupakan bagi para pengunjungnya.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Desktop1;