import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./styles/Results.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section>
          <div className="word">
            <h2>{props.definition.word}</h2>
          </div>
          {props.definition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
          <hr />
        </section>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <div>
                <h3>
                  <Meaning meaning={meaning} />
                </h3>
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
