import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./styles/Dictionary.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0]}&per_page=6`;
    let apiKey = "563492ad6f917000010000016fa1645aa1b4453cb3f861ebd2173217";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
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
        <Results definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
