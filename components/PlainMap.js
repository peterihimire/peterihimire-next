import React, { useState } from "react";
import ReactMapboxGl from "react-map-gl";

const REACT_MAPBOX_TOKEN =
  "pk.eyJ1IjoicGV0ZXJpaGltaXJlIiwiYSI6ImNrbmQ4d2E1cTF0M3YydW1xem1zYW4yc3kifQ.1JbAvC2L2DszORHSULqsXA";

const PlainMap = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });
  return (
    <div>
      {/* <h3>This is my MAP</h3> */}
      <ReactMapboxGl
        {...viewport}
        mapboxApiAccessToken={REACT_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapboxGl>
    </div>
  );
};

export default PlainMap;
