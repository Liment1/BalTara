import React, { useState } from "react";
import "./desktop4.css";
import Swal from "sweetalert2";

function Desktop4() {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || suggestions.trim() === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Please fill in both fields.",
      });
      return;
    }

    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, suggestions }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Thank you for your suggestions!",
          });
          // Handle successful submission
          setName("");
          setSuggestions("");
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "An error occurred. Please try again later.",
        });
      });
  };

  return (
    <div className="desktop4">
      <h1 className="judulsupport">Support Us</h1>

      <div className="nama">
        <input
          className="namaisi"
          type="text"
          placeholder="Type Your Name....."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="suggestions">
        <textarea
          className="suggestionsisi"
          type="text"
          placeholder="Enter Suggestions and Critics"
          value={suggestions}
          onChange={(e) => setSuggestions(e.target.value)}
        />
      </div>

      <div className="tampungbutton">
        <button className="buttonsub" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Desktop4;
