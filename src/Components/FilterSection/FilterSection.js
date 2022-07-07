import React from "react";
import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className="main_section">
      <h1 className="main_heading">Filters</h1>
      <div className="boder">
        <p className="sub_heading">Species</p>
        <input type="checkbox" id="humans" name="humans" value="humans" />
        <label htmlFor="humans">Humans</label>
        <br />
        <input type="checkbox" id="mythology" name="mythology" value="mythology" />
        <label htmlFor="mythology">Mytholog</label>
        <br />
        <input type="checkbox" id="otherSpecies" name="otherSpecies" value="otherSpecies" />
        <label htmlFor="otherSpecies">Other Species</label>
        <br />
      </div>
      <div className="boder">
        <p className="sub_heading">Gender</p>
        <input type="checkbox" id="male" name="male" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="checkbox" id="female" name="female" value="female" />
        <label htmlFor="female">Female</label>
        <br />
      </div>
      <div className="boder">
        <p className="sub_heading">Origin</p>
        <input type="checkbox" id="unknown" name="unknown" value="unknown" />
        <label htmlFor="unknown">Unknown</label>
        <br />
        <input type="checkbox" id="postEarth" name="postEarth" value="postEarth" />
        <label htmlFor="postEarth">Post-Apocalyptic Earth</label>
        <br />
        <input type="checkbox" id="nuptia" name="nuptia" value="nuptia" />
        <label htmlFor="nuptia">Nuptia 4</label>
        <br />
        <input type="checkbox" id="otherOrigin" name="otherOrigin" value="otherOrigin" />
        <label htmlFor="otherOrigin">Other Origin...</label>
        <br />
      </div>
    </div>
  );
};

export default FilterSection;
