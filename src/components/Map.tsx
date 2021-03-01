import '../scss/map.scss';
import { useContext, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent, Map as LeafletMap } from 'leaflet';
import { RadioContext } from '../context/radioContext';
import { renderMarker } from '../util/renderMarker';
import MapMarker from './MapMarker';
import { IRadio } from '../types/radioTypes';

const Map = () => {
  const attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const { radios, selectedRadio, setSelectedRadio } = useContext(RadioContext);
  const [map, setMap] = useState<LeafletMap | null>(null);

  const handleMarkerClick = (e: LeafletMouseEvent, radio: IRadio) => {
    setSelectedRadio!(radio);
    if (map)
      map.flyTo([
        parseFloat(radio.Position.Lat),
        parseFloat(radio.Position.Lon),
      ]);
  };

  return (
    <MapContainer
      center={[50.0647, 19.945]}
      zoom={12}
      className="map"
      whenCreated={setMap}
    >
      <TileLayer attribution={attribution} url={url} />
      {radios.map((radio, i) => (
        <Marker
          position={[
            parseFloat(radio.Position.Lat),
            parseFloat(radio.Position.Lon),
          ]}
          icon={renderMarker(
            <MapMarker
              selected={radio.Id === selectedRadio?.Id}
              radio={radio}
            />
          )}
          eventHandlers={{
            click: (e) => handleMarkerClick(e, radio),
          }}
          key={i}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
