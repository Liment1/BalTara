import React, { useState } from "react";
import "./desktop4.css";

function Desktop4() {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || suggestions.trim() === "") {
      setError("Name and suggestions cannot be empty");
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
          setError("");
          // Handle successful submission
          setName("");
          setSuggestions("");
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError("An error occurred while submitting data.");
      });
  };

  return (
    <div className="desktop4">
      <h1 className="judulsupport">Support Us</h1>

      <div className="name">
        <input
          className="nameisi"
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
