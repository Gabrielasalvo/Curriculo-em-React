import React from "react";
import "./ImageButton.css";

function ImageButton(props) {
  return (
    <div className="divButton">
      <button className="button">{props.button}</button>
    </div>
  );
}

export default ImageButton;
