import FilterSection from "./Components/FilterSection/FilterSection";
import MainSection from "./Components/MainSection/MainSection";
import "./App.css";
import { useState } from "react";

function App() {
  const [filterData, setFilterData] = useState("");

  const childToParent = (childdata) => {
    setFilterData(childdata);
  };

  return (
    <div className="App">
      <div>
        <FilterSection childToParent={childToParent} />
      </div>
      <div>
        <MainSection filterData={filterData} />
      </div>
    </div>
  );
}

export default App;
