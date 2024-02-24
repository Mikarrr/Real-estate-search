import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import useFetchViewRealEstate from "../../useFetch/useFetchViewRealEstate";
import { useParams } from "react-router-dom";

const Lite3dModel = ({ clickVisible }) => {
  const { id } = useParams();
  const [modelVisible, setModelVisible] = useState(false);
  const { data: realEstate } = useFetchViewRealEstate(
    `http://localhost:8000/realEstate/${id}`
  );

  useEffect(() => {
    setModelVisible(clickVisible);
  }, [clickVisible]);

  return (
    <div className="model">
      {modelVisible && realEstate && realEstate.model && (
        <Spline key={realEstate.id} scene={realEstate.model} />
      )}
    </div>
  );
};

export default Lite3dModel;
