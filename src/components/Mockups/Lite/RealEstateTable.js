import React from "react";
import { Link } from "react-router-dom";

const RealEstateTable = ({ data }) => {
  return (
    <tbody>
      {data &&
        data.map((realEstate) => (
          <tr className="realEstate-preview" key={realEstate.id}>
            <Link to={`real-estate/${realEstate.id}`}>
              <td>{realEstate.name}</td>
            </Link>
            <td>
              {realEstate.area}m<sup>2</sup>
            </td>
            <td>{realEstate.bedrooms}</td>
            <td>{realEstate.bathrooms}</td>
            <td>{realEstate.level}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default RealEstateTable;
