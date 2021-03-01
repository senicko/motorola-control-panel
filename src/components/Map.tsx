import '../scss/map.scss';
import { useContext, useEffect } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { LatLngExpression, latLng } from 'leaflet';
import { RadioContext } from '../context/radioContext';
import { renderMarker } from '../util/renderMarker';
import MapMarker from './MapMarker';

const Map = () => {
  const attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const center: LatLngExpression = [50.0647, 19.945];
  const { radios, setSelectedRadio } = useContext(RadioContext);

  useEffect(() => {
    console.log(radios);
  }, [radios]);

  return (
    <MapContainer center={center} zoom={12} className="map">
      <TileLayer attribution={attribution} url={url} />
      {radios.map((radio, i) => (
        <Marker
          position={[
            parseFloat(radio.Position.Lat),
            parseFloat(radio.Position.Lon),
          ]}
          icon={renderMarker(<MapMarker radio={radio} />)}
          eventHandlers={{
            click: () => setSelectedRadio!(radio),
          }}
          key={i}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
