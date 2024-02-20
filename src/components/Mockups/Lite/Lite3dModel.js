import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const Lite3dModel = ({ clickVisible }) => {
  const [modelVisible, setModelVisible] = useState(false);

  useEffect(() => {
    setModelVisible(clickVisible);
  }, [clickVisible]);

  return (
    <div className="model">
      {modelVisible && (
        <Spline scene="https://prod.spline.design/iOF632y195pYdrl0/scene.splinecode" />
      )}
    </div>
  );
};

export default Lite3dModel;
