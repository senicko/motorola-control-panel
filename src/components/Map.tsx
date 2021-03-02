import { Map as LeafletMap } from 'leaflet';
import { useContext, useState } from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { RadioContext } from '../context/radioContext';
import '../scss/map.scss';
import RadioMarkerLayer from './RadioMarkerLayer';
import RadioDistanceLayer from './RadioDistanceLayer';

const Map = () => {
  const attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const [map, setMap] = useState<LeafletMap>();

  return (
    <MapContainer
      center={[50.0647, 19.945]}
      zoom={12}
      className="map"
      whenCreated={setMap}
    >
      <TileLayer attribution={attribution} url={url} />
      <RadioMarkerLayer map={map} />
      <RadioDistanceLayer />
    </MapContainer>
  );
};

export default Map;
