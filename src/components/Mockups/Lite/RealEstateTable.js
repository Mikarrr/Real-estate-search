import React from "react";

const RealEstateTable = ({ data }) => {
  return (
    <tbody>
      {data &&
        data.map((realEstate) => (
          <tr className="realEstate-preview" key={realEstate.id}>
            <td>{realEstate.name}</td>
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
