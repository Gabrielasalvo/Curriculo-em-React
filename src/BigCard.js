import React from "react";
import "./BigCard.css";

function BigCard(props) {
  return (
    <div className="bigcard">
      <h2>{props.nome}</h2>
      <p>{props.apresentacao}</p>
    </div>
  );
}

export default BigCard;
