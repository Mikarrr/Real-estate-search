import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import RealEstateList from "./RealEstateList";
import RealEstateSingle from "./RealEstateSingle";
import Lite3dModel from "./Lite3dModel";
import Lite3dModelHome from "./Lite3dModelHome";

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
                <RealEstateSingle
                  clickVisibleValueChange={clickVisibleValueChange}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <div className="mockupRight">
        <Routes>
          <Route path="/" element={<Lite3dModelHome />} />
          <Route
            path="real-estate/:id"
            element={<Lite3dModel clickVisible={clickVisibleValue} />}
          />
        </Routes>
      </div>
    </section>
  );
};

export default Lite;
