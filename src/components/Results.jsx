import React from "react";
import "./Results.css";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Crop32Icon from "@mui/icons-material/Crop32";

function Results({ results }) {
  return (
    <div className="results-container">
      {results.map((result) => (
        <div className="result-card" key={result.id}>
          <img className="result-image" src={result.img} alt="" />
          <div className="result-data">
            <h2 style={{ color: "#7c4dff" }}>
              ${result.price}
              <span
                style={{ color: "grey", fontWeight: "100", fontSize: "15px" }}
              >
                /month
              </span>
            </h2>
            <h2>{result.location}</h2>
            <p style={{ color: "grey" }}> {result.address}</p>
            <hr />
            <div className="extraDetail">
              <div>
                <BedIcon className="svg" sx={{ color: "#7c4dff" }} />
                <span className="extraName"> {result.bed} Beds</span>
              </div>
              <div>
                <BathtubIcon sx={{ color: "#7c4dff" }} />

                <span> {result.bathroom} Bathrooms</span>
              </div>

              <div>
                <Crop32Icon sx={{ color: "#7c4dff" }} />

                <span>{result.area}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
