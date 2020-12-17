import React from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";
import { MapText } from "../styles/Map";
import L from "leaflet";

import markerIcon from "../assets/treble-clef.svg";

const icon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [55, 95],
});

function Map() {
  return (
    <div className="container">
      <MapContainer
        center={[44.18751798821183, 21.106120888418747]}
        zoom={15}
        attributionControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=846d4a58-60b9-4494-898a-7be5165ae8c5" />
        <Marker position={[44.18751798821183, 21.106120888418747]} icon={icon}>
            <Tooltip permanent>
              <MapText>
             Недалеко од центра Лапова, налази се Школа клавира и солфеђа Мелодром.
              </MapText>
            </Tooltip>
          </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
