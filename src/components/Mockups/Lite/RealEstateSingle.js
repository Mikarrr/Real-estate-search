import React from "react";
import useFetchViewRealEstate from "../../useFetch/useFetchViewRealEstate";
import { Link, useParams } from "react-router-dom";

const RealEstateSingle = ({ clickVisibleValueChange }) => {
  const { id } = useParams();
  const {
    data: realEstate,
    isPending,
    error,
  } = useFetchViewRealEstate(`http://localhost:8000/realEstate/${id}`);

  return (
    <div className="single-container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {realEstate && (
        <>
          <div className="single-header">
            <h1>APARTMENT: {realEstate.name}</h1>
            <Link to={`/lite`} onClick={() => clickVisibleValueChange(false)}>
              <p className="back-button">return to the apartment search</p>
            </Link>
            <p>Available</p>
          </div>
          <div className="single-iframe">
            <img src={realEstate.viewphoto} alt="realestateviewphoto" />
          </div>
          <div className="single-body">
            <div className="single-body-info">
              <p> Area: {realEstate.area}</p>
              <p> Level: {realEstate.level}</p>
              <p>Price: {realEstate.price} PLN</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RealEstateSingle;
