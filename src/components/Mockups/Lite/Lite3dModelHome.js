import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const Lite3dModelHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="model">
      {isLoading && <p>Loading...</p>}

      <Spline
        scene="https://prod.spline.design/nLjgJkOE2D2SUyjE/scene.splinecode"
        onLoad={handleLoaded}
      />
    </div>
  );
};

export default Lite3dModelHome;
