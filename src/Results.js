import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./styles/Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="word">
            <h2>{props.results.word}</h2>
          </div>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <h4>
                  <Phonetic phonetic={phonetic} />
                </h4>
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
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
