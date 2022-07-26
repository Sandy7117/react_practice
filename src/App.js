import FilterSection from "./Components/FilterSection/FilterSection";
import MainSection from "./Components/MainSection/MainSection";
import { useState } from "react";

function App() {
  const [filterData, setFilterData] = useState("");

  const childToParent = (childdata) => {
    setFilterData(childdata);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ minWidth: "17%" }}>
        <FilterSection childToParent={childToParent} />
      </div>
      <div style={{ minWidth: "80%" }}>
        <MainSection filterData={filterData} />
      </div>
    </div>
  );
}

export default App;
