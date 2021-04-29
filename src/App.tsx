import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import TopNavigationBar from "./Components/TopNavigaitonBar/TopNavigationBar";
import "office-ui-fabric-react/dist/css/fabric.css";

function App() {
  return (
    <div>
      <SearchBar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          <TopNavigationBar />
        </div>
      </div>
    </div>
  );
}

export default App;
