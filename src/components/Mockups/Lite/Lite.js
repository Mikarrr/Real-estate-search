import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import RealEstateList from "./RealEstateList";
import RealEstateSingle from "./RealEstateSingle";

const Lite = () => {
  return (
    <section className="mockupLite">
      <div className="mockupLeft"></div>
      <div className="mockupRight">
        <div className="mockupList">
          <Routes>
            <Route path="/" element={<RealEstateList />} />
            <Route
              path="real-estate/:id"
              element={<RealEstateSingleWithParams />}
            />
          </Routes>
        </div>
      </div>
    </section>
  );
};

const RealEstateSingleWithParams = () => {
  const { id } = useParams();
  return <RealEstateSingle id={id} />;
};

export default Lite;
