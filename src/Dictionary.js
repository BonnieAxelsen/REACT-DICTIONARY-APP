import React, { useState } from "react";
import Definition from "./Definition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert("searching..");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="header">
        <div class="row">
          <div class="col-sm-4 col-12">
            <div className="logo">
              <div>Dictio</div>
              <div>nary</div>
            </div>
          </div>
          <div class="col-sm-8 col-12">
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
