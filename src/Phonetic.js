import React from "react";
import "./styles/Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <div className="Listen">
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVolumeLow} className="listen-icon" />
          </a>
        </div>
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
