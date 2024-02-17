import React from "react";
import useFetchViewRealEstate from "../../useFetch/useFetchViewRealEstate";
import { Link } from "react-router-dom";

const RealEstateSingle = ({ id }) => {
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
            <h1>MIESKZANIE: {realEstate.name}</h1>
            <Link to={`/lite`}>
              <p> wróć do wyszukiwarki mieszkań</p>
            </Link>
            <p>DOSTĘPNE</p>
          </div>
          <div className="single-iframe">
            <img src={realEstate.viewphoto} alt="realestateviewphoto" />
          </div>
          <div className="single-body">
            <div className="single-body-info">
              <p> Powierzchnia: {realEstate.area}</p>
              <p> Piętro: {realEstate.level}</p>
              <p>Cena: {realEstate.price} </p>
            </div>
            <button>Wyślij zapytanie</button>
          </div>
        </>
      )}
    </div>
  );
};

export default RealEstateSingle;
