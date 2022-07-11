import React, { useEffect, useState } from "react";
import "./MainSection.css";
import axios from "axios";

const MainSection = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then((res) => {
      setLoading(false);
      const persons = res.data;
      const data = persons.results;
      setFetchedData(data);
      console.log(persons);
    });
  }, []);

  return (
    <div className="main_section_style">
      <h1 className="main_heading_style">Selected Filters</h1>
      <p style={{ marginBottom: "2px" }}>Search by Name</p>
      <input type="text" id="search" />
      <button>Search</button>
      <hr />
      <div className="content_area">
        {!loading &&
          fetchedData.map((characters) => (
            <span key={characters.id} className="second_half">
              <img
                style={{ borderRadius: "5px" }}
                width="240px"
                src={characters.image}
                alt=""
              />
              <div className="character_details">
                <div className="sub_details">
                  <p>STATUS</p>
                  <p style={{ color: "orange" }}>{characters.status}</p>
                </div>
                <hr />
                <div className="sub_details">
                  <p>SPECIES</p>
                  <p style={{ color: "orange" }}>{characters.species}</p>
                </div>
                <hr />
                <div className="sub_details">
                  <p>GENDER</p>
                  <p style={{ color: "orange" }}>{characters.gender}</p>
                </div>
                <hr />
                <div className="sub_details">
                  <p>ORIGIN</p>
                  <p style={{ color: "orange" }}>{characters.origin.name}</p>
                </div>
                <hr />
                <div className="sub_details">
                  <p>LAST LOCATION</p>
                  <p style={{ color: "orange" }}>{characters.location.name}</p>
                </div>
              </div>
            </span>
          ))}
      </div>
    </div>
  );
};

export default MainSection;
