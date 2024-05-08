import React from "react";
import ReactDOM from "react-dom/client";
import "./desktop4.css";

function Desktop4() {
  return (
    <div className="desktop4">
      <h1 className="judulsupport">Support Us</h1>

      <div className="nama">
        <input
          className="namaisi"
          type="text"
          placeholder="Type Your Name....."
        ></input>
      </div>
      <div className="suggestions">
        <textarea
          className="suggestionsisi"
          type="text"
          placeholder="Enter Suggestions and Critics"
        ></textarea>
      </div>
      <div className="tampungbutton">
        <button className="buttonsub">Submit</button>
      </div>
    </div>
  );
}

export default Desktop4;
