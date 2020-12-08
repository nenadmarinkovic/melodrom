import React from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";

import markerIcon from "../assets/marker.svg";

const icon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [55, 95],
});

function Map() {
  return (
    <div className="container">
      <MapContainer
        center={[44.186767, 21.106179]}
        zoom={16}
        attributionControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;
