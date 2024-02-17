import React, { useState, useEffect } from "react";
import useFetchViewRealEstate from "../../useFetch/useFetchViewRealEstate";
import ListSortLogic from "./ListSortLogic";
import LiteFilter from "./LiteFilter";
import RealEstateTable from "./RealEstateTable";

const RealEstateList = () => {
  const {
    data: originalData,
    isPending,
    error,
  } = useFetchViewRealEstate("http://localhost:8000/realEstate");
  const [startData, setStartData] = useState(originalData);
  const [filteredData, setFilteredData] = useState(originalData);
  const [sortedData, setSortedData] = useState(originalData);

  useEffect(() => {
    setStartData(originalData);
    setFilteredData(originalData);
    setSortedData(originalData);
  }, [originalData]);

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData);
  };

  const handleSortedChange = (sortedData) => {
    setSortedData(sortedData);
  };

  return (
    <div className="realEstate-list">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="load">Loading...</div>}

      <LiteFilter data={startData} setData={handleFilterChange} />
      <table>
        <ListSortLogic data={filteredData} setData={handleSortedChange} />
        <RealEstateTable data={sortedData} />
      </table>
    </div>
  );
};

export default RealEstateList;
