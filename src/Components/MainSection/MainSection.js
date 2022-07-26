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
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.id > b.id ? 1 : -1) },
    descending: { method: (a, b) => (a.id > b.id ? -1 : 1) },
  };

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
  let speciesFilteredData = [];
  let genderFilteredData = [];
  let originFilteredData = [];
  let originAndSpeciesFilter = [];
  let genderAndoriginFilter = [];
  let genderFilterForOrigin = [];

  let filterHuman = fetchedData.filter((data) => data.species === "Human");
  let filterMythology = fetchedData.filter(
    (data) => data.species === "Mythological Creature"
  );
  let filterOtherSpecies = fetchedData.filter(
    (data) =>
      data.species !== "Mythological Creature" && data.species !== "Human"
  );
  let filterMale = (data) => data.gender === "Male";
  let filterFemale = (data) => data.gender === "Female";
  let filterUnknownOrigin = (data) => data.origin.name === "unknown";
  let filterPostApocalypticEarth = (data) =>
    data.origin.name === "Post-Apocalyptic Earth";
  let filterNuptia4 = (data) => data.origin.name === "Nuptia 4";
  let filterOtherOrigin = (data) =>
    data.origin.name !== "unknown" &&
    data.origin.name !== "Earth" &&
    data.origin.name !== "Nuptia 4";

  useEffect(() => {
    if (filterData.humanFilter) {
      filteredData = filteredData.concat(filterHuman);
      speciesFilteredData = filterHuman;
    }
    if (filterData.mythologyFilter) {
      filteredData = filteredData.concat(filterMythology);
      speciesFilteredData = filterMythology;
    }
    if (filterData.otherSpeciesFilter) {
      filteredData = filteredData.concat(filterOtherSpecies);
      speciesFilteredData = filterOtherSpecies;
    }
    if (filterData.maleFilter) {
      filteredData = filteredData.concat(fetchedData.filter(filterMale));
      genderFilteredData = speciesFilteredData.filter(filterMale);
      genderFilterForOrigin = fetchedData.filter(filterMale);
    }
    if (filterData.femaleFilter) {
      filteredData = filteredData.concat(fetchedData.filter(filterFemale));
      genderFilteredData = speciesFilteredData.filter(filterFemale);
      genderFilterForOrigin = fetchedData.filter(filterFemale);
    }
    if (filterData.unknownFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(filterUnknownOrigin)
      );
      originFilteredData = genderFilteredData.filter(filterUnknownOrigin);
      originAndSpeciesFilter = speciesFilteredData.filter(filterUnknownOrigin);
      genderAndoriginFilter = genderFilterForOrigin.filter(filterUnknownOrigin);
    }
    if (filterData.postEarthFilter) {
      filteredData = filteredData.concat(
        fetchedData.filter(filterPostApocalypticEarth)
      );
      originFilteredData = genderFilteredData.filter(
        filterPostApocalypticEarth
      );
      originAndSpeciesFilter = speciesFilteredData.filter(
        filterPostApocalypticEarth
      );
      genderAndoriginFilter = genderFilterForOrigin.filter(
        filterPostApocalypticEarth
      );
    }
    if (filterData.nuptiaFilter) {
      filteredData = filteredData.concat(fetchedData.filter(filterNuptia4));
      originFilteredData = genderFilteredData.filter(filterNuptia4);
      originAndSpeciesFilter = speciesFilteredData.filter(filterNuptia4);
      genderAndoriginFilter = genderFilterForOrigin.filter(filterNuptia4);
    }
    if (filterData.otherOriginFilter) {
      filteredData = filteredData.concat(fetchedData.filter(filterOtherOrigin));
      originFilteredData = genderFilteredData.filter(filterOtherOrigin);
      originAndSpeciesFilter = speciesFilteredData.filter(filterOtherOrigin);
      genderAndoriginFilter = genderFilterForOrigin.filter(filterOtherOrigin);
    }

    if (
      (filterData.humanFilter ||
        filterData.mythologyFilter ||
        filterData.otherSpeciesFilter) &&
      (filterData.maleFilter || filterData.femaleFilter) &&
      !(
        filterData.unknownFilter ||
        filterData.postEarthFilter ||
        filterData.nuptiaFilter ||
        filterData.otherOriginFilter
      )
    ) {
      setFilteredNewData(genderFilteredData);
    } else if (
      (filterData.humanFilter ||
        filterData.mythologyFilter ||
        filterData.otherSpeciesFilter) &&
      (filterData.maleFilter || filterData.femaleFilter) &&
      (filterData.unknownFilter ||
        filterData.postEarthFilter ||
        filterData.nuptiaFilter ||
        filterData.otherOriginFilter)
    ) {
      setFilteredNewData(originFilteredData);
    } else if (
      (filterData.humanFilter ||
        filterData.mythologyFilter ||
        filterData.otherSpeciesFilter) &&
      !(filterData.maleFilter || filterData.femaleFilter) &&
      (filterData.unknownFilter ||
        filterData.postEarthFilter ||
        filterData.nuptiaFilter ||
        filterData.otherOriginFilter)
    ) {
      setFilteredNewData(originAndSpeciesFilter);
    } else if (
      !(
        filterData.humanFilter ||
        filterData.mythologyFilter ||
        filterData.otherSpeciesFilter
      ) &&
      (filterData.maleFilter || filterData.femaleFilter) &&
      (filterData.unknownFilter ||
        filterData.postEarthFilter ||
        filterData.nuptiaFilter ||
        filterData.otherOriginFilter)
    ) {
      setFilteredNewData(genderAndoriginFilter);
    } else {
      setFilteredNewData(filteredData);
    }
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
            <select
              id="sort_by"
              defaultValue={"DEFAULT"}
              onChange={(e) => setSortState(e.target.value)}
            >
              <option value="DEFAULT" disabled>
                Sort by ID
              </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
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
          filter.sort(sortMethods[sortState].method).map((characters) => (
            <div key={characters.id} className="second_half">
              <div>
                <img
                  style={{
                    width: "-webkit-fill-available",
                    borderRadius: "5px",
                  }}
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
