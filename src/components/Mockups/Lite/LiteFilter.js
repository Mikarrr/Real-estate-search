import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const LiteFilter = ({ data, setData }) => {
  const [areaRange, setAreaRange] = useState([75, 250]);
  const [levelRange, setLevelRange] = useState([0, 4]);
  const [priceRange, setPriceRange] = useState([1, 4000000]);
  const [filteredCount, setFilteredCount] = useState(data ? data.length : "");

  const handleFilterChange = (type, range) => {
    switch (type) {
      case "area":
        setAreaRange(range);
        break;
      case "level":
        setLevelRange(range);
        break;
      case "price":
        setPriceRange(range);
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
        realEstate.price >= priceRange[0] &&
        realEstate.price <= priceRange[1]
    );
    setData(filteredData);
    setFilteredCount(filteredData.length);
  };

  const clearAllFilters = () => {
    setAreaRange([75, 250]);
    setLevelRange([0, 4]);
    setPriceRange([1, 4000000]);
    setData(data);
    setFilteredCount("");
  };

  return (
    <div className="realEstate-filter-container">
      <h1>FILTER APARTMENTS</h1>
      <p>
        Visualizations are only a proposal for building and land development.
      </p>

      <div className="realEstate-filter">
        <div style={{ width: 150, marginTop: "10px" }}>
          <div className="realEstate-text-label">
            <Typography id="areaRangeSlider" gutterBottom>
              AREA:
            </Typography>
            <Typography id="areaRangeLeft" gutterBottom>
              {areaRange[0]}
            </Typography>
            <Typography>-</Typography>
            <Typography id="areaRangeRight" gutterBottom>
              {areaRange[1]}
            </Typography>
          </div>
          <div className="slider-number-label">
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
          </div>
        </div>
        <div style={{ width: 150, marginTop: "10px" }}>
          <div className="realEstate-text-label">
            <Typography id="levelRangeSlider" gutterBottom>
              LEVEL:
            </Typography>
            <Typography id="levelRangeLeft" gutterBottom>
              {levelRange[0]}
            </Typography>
            <Typography>-</Typography>
            <Typography id="levelRangeRight" gutterBottom>
              {levelRange[1]}
            </Typography>
          </div>
          <div className="slider-number-label">
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
          </div>
        </div>
        <div style={{ width: 150, marginTop: "10px" }}>
          <div className="realEstate-text-label">
            <Typography id="priceRangeSlider" gutterBottom>
              PRICE:
            </Typography>
            <Typography id="priceRangeLeft" gutterBottom>
              {priceRange[0]}
            </Typography>
            <Typography>-</Typography>
            <Typography id="priceRangeRight" gutterBottom>
              {priceRange[1]}
            </Typography>
          </div>
          <div className="slider-number-label">
            <Slider
              value={priceRange}
              onChange={(event, newValue) =>
                handleFilterChange("price", newValue)
              }
              valueLabelDisplay="auto"
              aria-labelledby="priceRangeSlider"
              min={1}
              max={4000000}
            />
          </div>
        </div>
      </div>
      <p>
        <b>{filteredCount}</b> APARTAMENTS FOUND
      </p>
      <p onClick={clearAllFilters} style={{ cursor: "pointer" }}>
        CLEAR ALL
      </p>
    </div>
  );
};

export default LiteFilter;
