import React from "react";
import "./styles/Photos.css";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4 col-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.original}
                    className="img-fluid"
                    alt={photo.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  } else {
    return null;
  }
}
