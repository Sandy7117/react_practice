import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="main_section_style">
      <h1 className="main_heading_style">Selected Filters</h1>
      <p style={{ marginBottom: "2px" }}>Search by Name</p>
      <input type="text" id="search" />
      <button>Search</button>
      <div className="content_area">
        <div className="second_half">
          <img
            style={{ borderRadius: "5px" }}
            width="175px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg"
            alt=""
          />
          <div className="character_details">
            <div
              style={{
                height: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>STATUS</p>
              <p style={{ color: "orange" }}>Alive</p>
            </div>
            <hr />
            <div
              style={{
                height: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>SPECIES</p>
              <p style={{ color: "orange" }}>Human</p>
            </div>
            <hr />
            <div
              style={{
                height: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>GENDER</p>
              <p style={{ color: "orange" }}>Female</p>
            </div>
            <hr />
            <div
              style={{
                height: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>ORIGIN</p>
              <p style={{ color: "orange" }}>Post Earth</p>
            </div>
            <hr />
            <div
              style={{
                height: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>LAST LOCATION</p>
              <p style={{ color: "orange" }}>Post Earth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
