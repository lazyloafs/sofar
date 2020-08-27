import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 25.7617,
    longitude: -80.1918,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div> 
      <ReactMapGL {...viewport}>markers here</ReactMapGL> 
    </div>
  )

}
