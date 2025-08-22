import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

const MapEvents = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapWithMarker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  const handleMapClick = (latlng) => {
    setPosition(latlng);
    onLocationSelect(latlng);
  };

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEvents onMapClick={handleMapClick} />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default MapWithMarker;
