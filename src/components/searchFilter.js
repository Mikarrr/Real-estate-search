import { Link } from "react-router-dom";

const SearchFilter = () => {
  return (
    <nav className="searchFilter">
      <ul>
        <li key="360">
          <Link to="/360">Search 360</Link>
        </li>

        <li key="lite">
          <Link to="/lite">Smart Mockup LITE</Link>
        </li>

        <li key="standard">
          <Link to="/standard">Smart Mockup Standard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SearchFilter;
