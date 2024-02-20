import React from "react";
import { Link } from "react-router-dom";

const RealEstateTable = ({ data, clickVisibleValueChange }) => {
  return (
    <div class="realEstate-items">
      {data &&
        data.map((realEstate) => (
          <Link
            to={`real-estate/${realEstate.id}`}
            class="realEstate-preview"
            key={realEstate.id}
            onClick={() => clickVisibleValueChange(true)}
          >
            <p>{realEstate.name}</p>
            <p>
              {realEstate.area}m<sup>2</sup>
            </p>
            <p>{realEstate.rooms}</p>

            <p>{realEstate.level}</p>
          </Link>
        ))}
    </div>
  );
};

export default RealEstateTable;
