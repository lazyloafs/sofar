import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import API from "../utils/API";


export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 25.7617,
    longitude: -80.1918,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });


    const [coffeeshops, setCoffeeshops] = useState([]);
    

  useEffect(() => {
    loadCoffeshops()
  }, [])
  function loadCoffeshops() {
    API.getCoffeeshops()
      .then(res => {
        console.log(res.data)
        setCoffeeshops(res.data)
      })
      .catch(err => console.log(err));
  };


  


  return (
    <div>
<ReactMapGL {...viewport}      
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/lazyloafs/ckec5ha2x192l19qrbdh2gjfe"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
      {coffeeshops.map((coffeshop,index)=> {
          return ( 
            <Marker
            latitude={coffeshop.latitude}
            longitude={coffeshop.longitude}
            key={index}
              >
            <div style={{"color": "white"}}>{coffeshop.title}</div>
          </Marker>
      );
      })}
      
  </ReactMapGL>
    </div>
  );
}