import { useContext } from 'react';
import { Marker } from 'react-leaflet';
import MapMarker from '../components/MapMarker';
import { RadioContext } from '../context/radioContext';
import { IRadio } from '../types/radioTypes';
import { renderMarker } from '../util/renderMarker';

const RadioMarkerLayer = () => {
  const { radios, selectedRadio, setSelectedRadioId } = useContext(
    RadioContext
  );

  const handleMarkerClick = (radio: IRadio) => setSelectedRadioId!(radio.Id);

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
              click: (e) => handleMarkerClick(radio),
            }}
            key={i}
          />
        ))}
    </>
  );
};

export default RadioMarkerLayer;
