import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const LiteFilter = ({ data, setData }) => {
  const [areaRange, setAreaRange] = useState([75, 250]);
  const [levelRange, setLevelRange] = useState([0, 4]);
  const [bedroomsRange, setBedroomsRange] = useState([1, 4]);

  const handleFilterChange = (type, range) => {
    switch (type) {
      case "area":
        setAreaRange(range);
        break;
      case "level":
        setLevelRange(range);
        break;
      case "bedrooms":
        setBedroomsRange(range);
        break;
      default:
        break;
    }
    filterData();
  };

  const filterData = () => {
    const filteredData = data.filter(
      (realEstate) =>
        realEstate.area >= areaRange[0] &&
        realEstate.area <= areaRange[1] &&
        realEstate.level >= levelRange[0] &&
        realEstate.level <= levelRange[1] &&
        realEstate.bedrooms >= bedroomsRange[0] &&
        realEstate.bedrooms <= bedroomsRange[1]
    );
    setData(filteredData);
  };

  return (
    <div className="realEstate-filter-container">
      <h1>ETHDEV</h1>
      <p>
        Wizualizacje stanowią jedynie propozycję zabudowy oraz zagospodorwania
        terenu.
      </p>
      <div className="realEstate-filter">
        <div style={{ width: 150, marginTop: "10px" }}>
          <Typography id="areaRangeSlider" gutterBottom>
            Powierzchnia:
          </Typography>
          <div className="slider-number-label">
            <Typography id="areaRangeLeft" gutterBottom>
              {areaRange[0]}
            </Typography>
            <Slider
              value={areaRange}
              onChange={(event, newValue) =>
                handleFilterChange("area", newValue)
              }
              valueLabelDisplay="auto"
              aria-labelledby="areaRangeSlider"
              min={75}
              max={250}
            />
            <Typography id="areaRangeRight" gutterBottom>
              {areaRange[1]}
            </Typography>
          </div>
        </div>
        <div style={{ width: 150, marginTop: "10px" }}>
          <Typography id="levelRangeSlider" gutterBottom>
            Piętro:
          </Typography>
          <div className="slider-number-label">
            <Typography id="levelRangeLeft" gutterBottom>
              {levelRange[0]}
            </Typography>
            <Slider
              value={levelRange}
              onChange={(event, newValue) =>
                handleFilterChange("level", newValue)
              }
              valueLabelDisplay="auto"
              aria-labelledby="levelRangeSlider"
              min={0}
              max={4}
            />
            <Typography id="levelRangeRight" gutterBottom>
              {levelRange[1]}
            </Typography>
          </div>
        </div>
        <div style={{ width: 150, marginTop: "10px" }}>
          <Typography id="bedroomsRangeSlider" gutterBottom>
            Sypialnie:
          </Typography>
          <div className="slider-number-label">
            <Typography id="bedroomsRangeLeft" gutterBottom>
              {bedroomsRange[0]}
            </Typography>
            <Slider
              value={bedroomsRange}
              onChange={(event, newValue) =>
                handleFilterChange("bedrooms", newValue)
              }
              valueLabelDisplay="auto"
              aria-labelledby="bedroomsRangeSlider"
              min={1}
              max={4}
            />
            <Typography id="bedroomsRangeRight" gutterBottom>
              {bedroomsRange[1]}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteFilter;
