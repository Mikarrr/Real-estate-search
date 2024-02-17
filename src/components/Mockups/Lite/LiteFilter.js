import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const LiteFilter = ({ data, setData }) => {
  const [areaRange, setAreaRange] = useState([75, 250]);

  const handleAreaChange = (event, newValue) => {
    setAreaRange(newValue);
    filterDataByArea(newValue);
  };

  const filterDataByArea = (range) => {
    const filteredData = data.filter(
      (realEstate) => realEstate.area >= range[0] && realEstate.area <= range[1]
    );
    setData(filteredData);
  };

  return (
    <div className="realEstate-filter">
      <h1>ETHDEV</h1>
      <p>
        Wizualizacje stanowią jedynie propozycję zabudowy oraz zagospodorwania
        terenu.
      </p>
      <div style={{ width: 150, marginTop: "10px" }}>
        <Typography id="areaRangeSlider" gutterBottom>
          Filter by Area:
        </Typography>
        <Slider
          value={areaRange}
          onChange={handleAreaChange}
          valueLabelDisplay="auto"
          aria-labelledby="areaRangeSlider"
          min={75}
          max={250}
        />
      </div>
    </div>
  );
};

export default LiteFilter;
