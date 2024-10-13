import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface TrashBin {
  id: string;
  location: string;
  fillLevel: number;
  lat: number;
  lng: number;
}

interface TrashBinMapProps {
  bins: TrashBin[];
}

const TrashBinMap: React.FC<TrashBinMapProps> = ({ bins }) => {
  const getMarkerColor = (fillLevel: number) => {
    if (fillLevel > 80) return 'red';
    if (fillLevel > 50) return 'yellow';
    return 'green';
  };

  const customIcon = (fillLevel: number) => new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${getMarkerColor(fillLevel)}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {bins.map((bin) => (
        <Marker
          key={bin.id}
          position={[bin.lat, bin.lng]}
          icon={customIcon(bin.fillLevel)}
        >
          <Popup>
            <div>
              <h3>{bin.location}</h3>
              <p>Fill Level: {bin.fillLevel}%</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TrashBinMap;