import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchHeader from "./components/searchHeader";
import SearchFilter from "./components/searchFilter";
import Lite from "./components/Mockups/Lite/Lite";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchHeader />
        <SearchFilter />
        <Routes>
          <Route path="/lite/*" element={<Lite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
