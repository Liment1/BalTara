import React, {useEffect, useRef} from "react";
import emailjs from "@emailjs/browser";
import "./desktop4.css";

const Contact = () => {
  const form = useRef();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  const sendEmail = (e) => {
    e.preventDefault();

    // Mengambil nilai dari formulir
    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userIg = formData.get("user_ig");
    const message = formData.get("message");

    // Validasi: pastikan semua input diisi
    if (!userName || !userIg || !message) {
      alert("Silakan isi semua kolom sebelum mengirim.");
      return;
    }

    emailjs
      .sendForm(
        "service_ka7tmnw",
        "template_27ovepq",
        form.current,
        "jzoz9uNiErzSbzXjd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan berhasil dikirim!");
          // Mengosongkan formulir setelah pesan berhasil dikirim
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Terjadi kesalahan saat mengirim pesan.");
        }
      );
  };

  return (
    <div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <p className="judulsupport">Support Us!</p>
        <div className="namakotak">
          <input
            className="namakotakisi"
            type="text"
            name="user_name"
            placeholder="Nama Anda"
          />
        </div>
        <div className="namakotak">
          <input
            className="namakotakisi"
            type="text"
            name="user_ig"
            placeholder="@username instagram (opsional)"
          />
        </div>

        <div className="suggestions">
          <textarea
            className="suggestionsisi"
            name="message"
            placeholder="Tuliskan pesan / kritik / saran pada kami!"
          />
        </div>

        <div className="tampungbutton">
          <button className="buttonsub" type="submit">
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
