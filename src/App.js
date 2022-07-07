import FilterSection from "./Components/FilterSection/FilterSection";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  return (
    <div style={{ display:'flex' }}>
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
