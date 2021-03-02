import { LeafletEvent, Map } from 'leaflet';
import { FunctionComponent, useContext } from 'react';
import { Marker } from 'react-leaflet';
import MapMarker from '../components/MapMarker';
import { RadioContext } from '../context/radioContext';
import { IRadio } from '../types/radioTypes';
import { parseRadioPosition } from '../util/parseRadioPosition';
import { renderMarker } from '../util/renderMarker';

interface RadioMarkerLayerProps {
  map: Map | undefined;
}

const RadioMarkerLayer: FunctionComponent<RadioMarkerLayerProps> = ({
  map,
}) => {
  const { radios, selectedRadio, setSelectedRadioId } = useContext(
    RadioContext
  );

  const handleMarkerClick = (e: LeafletEvent, radio: IRadio) => {
    setSelectedRadioId!(radio.Id);
    if (map) map.flyTo(parseRadioPosition(radio));
  };

  return (
    <>
      {radios &&
        radios.map((radio, i) => (
          <Marker
            position={[
              parseFloat(radio.Position.Lat),
              parseFloat(radio.Position.Lon),
            ]}
            icon={renderMarker(
              <MapMarker selectedRadio={selectedRadio} radio={radio} />
            )}
            eventHandlers={{
              click: (e) => handleMarkerClick(e, radio),
            }}
            key={i}
          />
        ))}
    </>
  );
};

export default RadioMarkerLayer;
