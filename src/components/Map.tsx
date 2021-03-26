import { MapContainer, TileLayer } from 'react-leaflet';
import '../scss/map.scss';
import RadioMarkerLayer from './RadioMarkerLayer';
import RadioDistanceLayer from './RadioDistanceLayer';

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const url = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

const Map = () => {
  return (
    <MapContainer center={[50.0647, 19.945]} zoom={12} className="map">
      <TileLayer attribution={attribution} url={url} />
      <RadioMarkerLayer />
      <RadioDistanceLayer />
    </MapContainer>
  );
};

export default Map;
