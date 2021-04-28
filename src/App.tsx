import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopNavigationBar from "./Components/TopNavigaitonBar/TopNavigationBar";
import "office-ui-fabric-react/dist/css/fabric.css";
import BottomMenu from "./Components/BottomMenu/BottomMenu";

function App() {
  return (
    <div>
      <SearchBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <TopNavigationBar />
        </div>
      </div>
    </div>
  );
}

export default App;
