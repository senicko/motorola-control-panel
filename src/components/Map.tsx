import { MapContainer, TileLayer } from 'react-leaflet';
import '../scss/map.scss';
import RadioMarkerLayer from './RadioMarkerLayer';
import RadioDistanceLayer from './RadioDistanceLayer';

const attribution =
  '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const url = `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VuaWNrbyIsImEiOiJja2psOGtreHc1enQ3MnNsZzJwNWZ0M2xkIn0.70LMmsbe28VUAw9WCkV-nw`;

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
