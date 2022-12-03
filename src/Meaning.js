import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}

        <Synonyms synonyms={props.meaning.synonyms} />
        <hr />
      </div>
    );
  } else {
    return null;
  }
}
