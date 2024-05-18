import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./desktop4.css";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userIg = formData.get("user_ig");
    const message = formData.get("message");

    if (!userName || !userIg || !message) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "Harap isi semua kolom!"
      });
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
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Terima kasih sarannya orang baik!"
          });
          // Mengosongkan formulir setelah pesan berhasil dikirim
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "failed",
            title: "Terjadi kesalahan!"
          });
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
