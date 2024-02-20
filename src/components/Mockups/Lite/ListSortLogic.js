import { useState, useEffect } from "react";

const ListSortLogic = ({ data, setData }) => {
  const [sortDirection, setSortDirection] = useState({
    name: "asc",
    area: "none",
    rooms: "none",
    level: "none",
  });

  useEffect(() => {
    if (data) {
      let newData = [...data];

      newData.sort((a, b) => {
        switch (true) {
          case sortDirection.name !== "none":
            return compareNames(a.name, b.name, sortDirection.name);
          case sortDirection.area !== "none":
            return compareNumbers(a.area, b.area, sortDirection.area);
          case sortDirection.rooms !== "none":
            return compareNumbers(a.rooms, b.rooms, sortDirection.rooms);
          case sortDirection.level !== "none":
            return compareNumbers(a.level, b.level, sortDirection.level);
          default:
            return 0;
        }
      });

      setData(newData);
    }
  }, [data, sortDirection, setData]);

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
    setSortDirection((prevSortDirection) => ({
      ...prevSortDirection,
      [column]: prevSortDirection[column] === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div class="realEstate-header">
      <p onClick={() => handleSortDirectionChange("name")}>
        Name {sortDirection.name === "asc" ? "↑" : "↓"}
      </p>
      <p onClick={() => handleSortDirectionChange("area")}>
        Area {sortDirection.area === "asc" ? "↑" : "↓"}
      </p>
      <p onClick={() => handleSortDirectionChange("rooms")}>
        Rooms {sortDirection.rooms === "asc" ? "↑" : "↓"}
      </p>
      <p onClick={() => handleSortDirectionChange("level")}>
        Level {sortDirection.level === "asc" ? "↑" : "↓"}
      </p>
    </div>
  );
};

export default ListSortLogic;
