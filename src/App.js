import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchHeader from "./components/searchHeader";
import SearchFilter from "./components/searchFilter";
import Lite from "./components/Mockups/Lite/Lite";
import Search from "./components/Mockups/Search/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <SearchHeader />
          <SearchFilter />
        </div>
        <Routes>
          <Route path="/lite/*" element={<Lite />} />
          <Route path="/360/*" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
