import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  }; 
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
 
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleonChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.prototype = { heading: "" };
