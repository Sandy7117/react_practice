import FilterSection from "./Components/FilterSection/FilterSection";
import MainSection from "./Components/MainSection/MainSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <FilterSection />
      </div>
      <div>
        <MainSection />
      </div>
    </div>
  );
}

export default App;
