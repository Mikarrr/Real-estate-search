import { useState, useEffect } from "react";

const ListSortLogic = ({ data, setData }) => {
  const [nameSortDirection, setNameSortDirection] = useState("asc");
  const [areaSortDirection, setAreaSortDirection] = useState("none");
  const [bedroomsSortDirection, setBedroomsSortDirection] = useState("none");
  const [bathroomsSortDirection, setBathroomsSortDirection] = useState("none");
  const [levelSortDirection, setLevelSortDirection] = useState("none");

  useEffect(() => {
    if (data) {
      let newData = [...data];

      switch (true) {
        case nameSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNames(a.name, b.name, nameSortDirection);
          });
          break;
        case areaSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNumbers(a.area, b.area, areaSortDirection);
          });
          break;
        case bedroomsSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNumbers(
              a.bedrooms,
              b.bedrooms,
              bedroomsSortDirection
            );
          });
          break;
        case bathroomsSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNumbers(
              a.bathrooms,
              b.bathrooms,
              bathroomsSortDirection
            );
          });
          break;
        case levelSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNumbers(a.level, b.level, levelSortDirection);
          });
          break;
        default:
          break;
      }

      setData(newData);
    }
  }, [
    data,
    nameSortDirection,
    areaSortDirection,
    bedroomsSortDirection,
    bathroomsSortDirection,
    levelSortDirection,
    setData,
  ]);

  const compareNames = (nameA, nameB, direction) => {
    const partsA = nameA.split("-");
    const partsB = nameB.split("-");
    const numA = parseInt(partsA[1]);
    const numB = parseInt(partsB[1]);
    if (partsA[0] !== partsB[0]) {
      return direction === "asc"
        ? partsA[0].localeCompare(partsB[0])
        : partsB[0].localeCompare(partsA[0]);
    } else {
      return direction === "asc" ? numA - numB : numB - numA;
    }
  };

  const compareNumbers = (numA, numB, direction) => {
    return direction === "asc" ? numA - numB : numB - numA;
  };

  const handleSortDirectionChange = (column) => {
    switch (column) {
      case "name":
        setNameSortDirection(nameSortDirection === "asc" ? "desc" : "asc");
        setAreaSortDirection("none");
        setBedroomsSortDirection("none");
        setBathroomsSortDirection("none");
        setLevelSortDirection("none");
        break;
      case "area":
        setAreaSortDirection(areaSortDirection === "asc" ? "desc" : "asc");
        setNameSortDirection("none");
        setBedroomsSortDirection("none");
        setBathroomsSortDirection("none");
        setLevelSortDirection("none");
        break;
      case "bedrooms":
        setBedroomsSortDirection(
          bedroomsSortDirection === "asc" ? "desc" : "asc"
        );
        setNameSortDirection("none");
        setAreaSortDirection("none");
        setBathroomsSortDirection("none");
        setLevelSortDirection("none");
        break;
      case "bathrooms":
        setBathroomsSortDirection(
          bathroomsSortDirection === "asc" ? "desc" : "asc"
        );
        setNameSortDirection("none");
        setAreaSortDirection("none");
        setBedroomsSortDirection("none");
        setLevelSortDirection("none");
        break;
      case "level":
        setLevelSortDirection(levelSortDirection === "asc" ? "desc" : "asc");
        setNameSortDirection("none");
        setAreaSortDirection("none");
        setBedroomsSortDirection("none");
        setBathroomsSortDirection("none");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <thead>
        <tr>
          <th onClick={() => handleSortDirectionChange("name")}>
            Nazwa {nameSortDirection === "asc" ? "↑" : "↓"}
          </th>
          <th onClick={() => handleSortDirectionChange("area")}>
            Powierzchnia {areaSortDirection === "asc" ? "↑" : "↓"}
          </th>
          <th onClick={() => handleSortDirectionChange("bedrooms")}>
            Sypialnie {bedroomsSortDirection === "asc" ? "↑" : "↓"}
          </th>
          <th onClick={() => handleSortDirectionChange("bathrooms")}>
            Łazienki {bathroomsSortDirection === "asc" ? "↑" : "↓"}
          </th>
          <th onClick={() => handleSortDirectionChange("level")}>
            Piętro {levelSortDirection === "asc" ? "↑" : "↓"}
          </th>
        </tr>
      </thead>
    </>
  );
};

export default ListSortLogic;
