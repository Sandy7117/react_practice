import React, { useEffect, useState } from "react";
import "./FilterSection.css";

const FilterSection = ({ childToParent }) => {
  const [humanFilter, setHumanFilter] = useState(false);
  const [mythologyFilter, setMythologyFilter] = useState(false);
  const [otherSpeciesFilter, setOtherSpeciesFilter] = useState(false);
  const [maleFilter, setMaleFilter] = useState(false);
  const [femaleFilter, setFemaleFilter] = useState(false);
  const [unknownFilter, setUnknownFilter] = useState(false);
  const [postEarthFilter, setPostEarthFilter] = useState(false);
  const [nuptiaFilter, setNuptiaFilter] = useState(false);
  const [otherOriginFilter, setOtherOriginFilter] = useState(false);
  const [data, setData] = useState({});

  const humanFilterHandler = () => {
    setHumanFilter(!humanFilter);
  };
  const mythologyFilterHandler = () => {
    setMythologyFilter(!mythologyFilter);
  };
  const otherSpeciesFilterHandler = () => {
    setOtherSpeciesFilter(!otherSpeciesFilter);
  };
  const maleFilterHandler = () => {
    setMaleFilter(!maleFilter);
  };
  const femaleFilterHandler = () => {
    setFemaleFilter(!femaleFilter);
  };
  const unknownFilterHandler = () => {
    setUnknownFilter(!unknownFilter);
  };
  const postEarthFilterHandler = () => {
    setPostEarthFilter(!postEarthFilter);
  };
  const nuptiaFilterHandler = () => {
    setNuptiaFilter(!nuptiaFilter);
  };
  const otherOriginFilterHandler = () => {
    setOtherOriginFilter(!otherOriginFilter);
  };

  const submitHandler = (e) => {
    setData({
      humanFilter,
      mythologyFilter,
      otherSpeciesFilter,
      maleFilter,
      femaleFilter,
      unknownFilter,
      postEarthFilter,
      nuptiaFilter,
      otherOriginFilter,
    });
    e.preventDefault();
  };

  useEffect(() => {
    childToParent(data);
  }, [data]);

  return (
    <div className="main_section">
      <form onSubmit={submitHandler}>
        <h1 className="main_heading">Filters</h1>
        <div className="boder">
          <p className="sub_heading">Species</p>
          <input
            type="checkbox"
            id="humans"
            name="humans"
            value="humans"
            onClick={humanFilterHandler}
          />
          <label htmlFor="humans">Humans</label>
          <br />
          <input
            type="checkbox"
            id="mythology"
            name="mythology"
            value="mythology"
            onClick={mythologyFilterHandler}
          />
          <label htmlFor="mythology">Mytholog</label>
          <br />
          <input
            type="checkbox"
            id="otherSpecies"
            name="otherSpecies"
            value="otherSpecies"
            onClick={otherSpeciesFilterHandler}
          />
          <label htmlFor="otherSpecies">Other Species</label>
          <br />
        </div>
        <div className="boder">
          <p className="sub_heading">Gender</p>
          <input
            type="checkbox"
            id="male"
            name="male"
            value="male"
            onClick={maleFilterHandler}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="checkbox"
            id="female"
            name="female"
            value="female"
            onClick={femaleFilterHandler}
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <div className="boder">
          <p className="sub_heading">Origin</p>
          <input
            type="checkbox"
            id="unknown"
            name="unknown"
            value="unknown"
            onClick={unknownFilterHandler}
          />
          <label htmlFor="unknown">Unknown</label>
          <br />
          <input
            type="checkbox"
            id="postEarth"
            name="postEarth"
            value="postEarth"
            onClick={postEarthFilterHandler}
          />
          <label htmlFor="postEarth">Post-Apocalyptic Earth</label>
          <br />
          <input
            type="checkbox"
            id="nuptia"
            name="nuptia"
            value="nuptia"
            onClick={nuptiaFilterHandler}
          />
          <label htmlFor="nuptia">Nuptia 4</label>
          <br />
          <input
            type="checkbox"
            id="otherOrigin"
            name="otherOrigin"
            value="otherOrigin"
            onClick={otherOriginFilterHandler}
          />
          <label htmlFor="otherOrigin">Other Origin...</label>
          <br />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FilterSection;
