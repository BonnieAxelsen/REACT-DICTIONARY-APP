import React, { useState } from "react";
import axios from "axios";
import "./styles/Dictionary.css";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <div className="row">
            <div className="col-sm-5 col-12 heading">
              <h1>dictionary</h1>
            </div>
            <div className="col-sm-7 col-12 search-bar">
              <div className="search">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="what word are you looking for?"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleKeywordChange}
                    />
                    <button className="btn">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
