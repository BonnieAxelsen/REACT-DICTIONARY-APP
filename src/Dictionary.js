import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="header">
        <div className="row">
          <div className="col-sm-4 col-12">
            <div className="logo">
              <div>Dictio</div>
              <div>nary</div>
            </div>
          </div>
          <div className="col-sm-8 col-12">
            <div className="search">
              <form onSubmit={search}>
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
      </div>
      <Definition />
    </div>
  );
}
