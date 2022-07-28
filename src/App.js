import FilterSection from "./Components/FilterSection/FilterSection";
import MainSection from "./Components/MainSection/MainSection";
import { useState } from "react";
import "./App.css";

function App() {
  const [filterData, setFilterData] = useState("");

  const childToParent = (childdata) => {
    setFilterData(childdata);
  };

  return (
    <div id="main" className="main">
      <div className="filter_section">
        <FilterSection childToParent={childToParent} />
      </div>
      <div className="app_main_section">
        <MainSection filterData={filterData} />
      </div>
    </div>
  );
}

export default App;
