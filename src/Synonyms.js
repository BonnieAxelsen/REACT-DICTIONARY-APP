import React from "react";
import "./styles/Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <h5>Similar:</h5>
        <p>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym} / </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
