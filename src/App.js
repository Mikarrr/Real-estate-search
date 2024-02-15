import Lite from "./components/Mockups/Lite";
import SearchFilter from "./components/searchFilter";
import SearchHeader from "./components/searchHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchHeader />
        <SearchFilter />
        <Routes>
          <Route path="/lite" element={<Lite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
