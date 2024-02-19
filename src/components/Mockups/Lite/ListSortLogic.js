import { useState, useEffect } from "react";

const ListSortLogic = ({ data, setData }) => {
  const [nameSortDirection, setNameSortDirection] = useState("asc");
  const [areaSortDirection, setAreaSortDirection] = useState("none");
  const [roomsSortDirection, setroomsSortDirection] = useState("none");
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
        case roomsSortDirection !== "none":
          newData = [...data].sort((a, b) => {
            return compareNumbers(a.rooms, b.rooms, roomsSortDirection);
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
    roomsSortDirection,
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
        setroomsSortDirection("none");

        setLevelSortDirection("none");
        break;
      case "area":
        setAreaSortDirection(areaSortDirection === "asc" ? "desc" : "asc");
        setNameSortDirection("none");
        setroomsSortDirection("none");

        setLevelSortDirection("none");
        break;
      case "rooms":
        setroomsSortDirection(roomsSortDirection === "asc" ? "desc" : "asc");
        setNameSortDirection("none");
        setAreaSortDirection("none");

        setLevelSortDirection("none");
        break;
      case "level":
        setLevelSortDirection(levelSortDirection === "asc" ? "desc" : "asc");
        setNameSortDirection("none");
        setAreaSortDirection("none");
        setroomsSortDirection("none");

        break;
      default:
        break;
    }
  };

  return (
    <div class="realEstate-header">
      <p onClick={() => handleSortDirectionChange("name")}>
        Name {nameSortDirection === "asc" ? "↑" : "↓"}
      </p>
      <p onClick={() => handleSortDirectionChange("area")}>
        Area {areaSortDirection === "asc" ? "↑" : "↓"}
      </p>
      <p onClick={() => handleSortDirectionChange("rooms")}>
        Rooms {roomsSortDirection === "asc" ? "↑" : "↓"}
      </p>

      <p onClick={() => handleSortDirectionChange("level")}>
        Level {levelSortDirection === "asc" ? "↑" : "↓"}
      </p>
    </div>
  );
};

export default ListSortLogic;
