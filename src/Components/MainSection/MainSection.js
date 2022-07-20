import React, { useEffect, useState } from "react";
import "./MainSection.css";
import Axios from "axios";

const MainSection = ({ filterData }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredNewData, setFilteredNewData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [devicesPage, setDevicesPage] = useState(1);

  const fetchCharacters = (url) => {
    if (!url) {
      url = `https://rickandmortyapi.com/api/character/`;
    }
    Axios({
      method: "get",
      url: url,
    }).then((res) => {
      const persons = res.data;
      const data = persons.results;
      setFetchedData(data);
      setTotalPages(persons.info.pages);
      setNextUrl(persons.info.next);
      setPreviousUrl(persons.info.prev);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCharacters();
    setDevicesPage(1);
  }, []);

  const goToPreviousHandler = () => {
    fetchCharacters(previousUrl);
    setDevicesPage(devicesPage - 1);
  };

  const goToNextHandler = () => {
    fetchCharacters(nextUrl);
    setDevicesPage(devicesPage + 1);
  };

  let filteredData = [];
  useEffect(() => {
    if (filterData.humanFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter((fetchedData) => fetchedData.species === "Human")
      );
    }
    if (filterData.mythologyFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) => fetchedData.species === "Mythological Creature"
        )
      );
    }
    if (filterData.otherSpeciesFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) =>
            fetchedData.species !== "Mythological Creature" &&
            fetchedData.species !== "Human"
        )
      );
    }
    if (filterData.maleFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter((fetchedData) => fetchedData.gender === "Male")
      );
    }
    if (filterData.femaleFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter((fetchedData) => fetchedData.gender === "Female")
      );
    }
    if (filterData.unknownFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) => fetchedData.origin.name === "unknown"
        )
      );
    }
    if (filterData.postEarthFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) => fetchedData.origin.name === "Post-Apocalyptic Earth"
        )
      );
    }
    if (filterData.nuptiaFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) => fetchedData.origin.name === "Nuptia 4"
        )
      );
    }
    if (filterData.otherOriginFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(
          (fetchedData) =>
            fetchedData.origin.name !== "unknown" &&
            fetchedData.origin.name !== "Earth" &&
            fetchedData.origin.name !== "Nuptia 4"
        )
      );
    }
    setFilteredNewData(filteredData);
  }, [
    filterData.humanFilter,
    filterData.mythologyFilter,
    filterData.otherSpeciesFilter,
    filterData.maleFilter,
    filterData.femaleFilter,
    filterData.unknownFilter,
    filterData.postEarthFilter,
    filterData.nuptiaFilter,
    filterData.otherOriginFilter,
  ]);

  useEffect(() => {
    if (
      filterData.humanFilter ||
      filterData.mythologyFilter ||
      filterData.otherSpeciesFilter ||
      filterData.maleFilter ||
      filterData.femaleFilter ||
      filterData.unknownFilter ||
      filterData.postEarthFilter ||
      filterData.nuptiaFilter ||
      filterData.otherOriginFilter
    ) {
      setFilter(filteredNewData);
    } else {
      setFilter(fetchedData);
    }
  }, [filteredNewData, fetchedData]);

  return (
    <div className="main_section_style">
      <h1 className="main_heading_style">Selected Filters</h1>
      <p style={{ marginBottom: "2px" }}>Search by Name</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <input type="text" id="search" />
          <button>Search</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "self-end",
          }}
        >
          <div>
            <form>
              <select id="sort_by" name="options">
                <option defaultValue="sort_by">Sort by ID</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="pagination-div">
            {devicesPage > 1 ? (
              <button onClick={goToPreviousHandler} className="btn">
                Prev
              </button>
            ) : (
              ""
            )}
            <p className="current-page">
              Page {devicesPage} of {totalPages}
            </p>
            {devicesPage < totalPages ? (
              <button onClick={goToNextHandler} className="btn">
                Next
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className={filter.length > 0 ? "content_area" : "no_data"}>
        {!loading && filter.length > 0 ? (
          filter.map((characters) => (
            <div key={characters.id} className="second_half">
              <div>
                <img
                  style={{ borderRadius: "5px" }}
                  width="240px"
                  src={characters.image}
                  alt=""
                />
                <div className="bottom-left">
                  <p style={{ fontSize: "15px", paddingLeft: "10px" }}>
                    {characters.name}
                  </p>
                  <p style={{ fontSize: "10px", paddingLeft: "10px" }}>
                    id: {characters.id} - created {characters.created}
                  </p>
                </div>
              </div>

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
            </div>
          ))
        ) : (
          <p>No character found</p>
        )}
      </div>
    </div>
  );
};

export default MainSection;
