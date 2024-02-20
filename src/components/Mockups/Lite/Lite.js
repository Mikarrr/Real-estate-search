import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import RealEstateList from "./RealEstateList";
import RealEstateSingle from "./RealEstateSingle";
import Lite3dModel from "./Lite3dModel";

const Lite = () => {
  const [clickVisibleValue, setClickVisibleValue] = useState(false);

  const clickVisibleValueChange = (value) => {
    setClickVisibleValue(value);
  };

  return (
    <section className="mockupLite">
      <div className="mockupLeft">
        <div className="mockupList">
          <Routes>
            <Route
              path="/"
              element={
                <RealEstateList
                  clickVisibleValueChange={clickVisibleValueChange}
                />
              }
            />
            <Route
              path="real-estate/:id"
              element={
                <RealEstateSingleWithParams
                  clickVisibleValueChange={clickVisibleValueChange}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <div className="mockupRight">
        <Lite3dModel clickVisible={clickVisibleValue} />
      </div>
    </section>
  );
};

const RealEstateSingleWithParams = ({ clickVisibleValueChange }) => {
  const { id } = useParams();
  return (
    <RealEstateSingle
      id={id}
      clickVisibleValueChange={clickVisibleValueChange}
    />
  );
};

export default Lite;
