import { useContext, useMemo } from 'react';
import { RadioContext } from '../context/radioContext';
import { Polyline } from 'react-leaflet';

const RadioDistanceLayer = () => {
  const { radios, selectedRadio } = useContext(RadioContext);

  const unselectedRadios = useMemo(
    () => radios.filter((radio) => radio.Id !== selectedRadio?.Id),
    [radios, selectedRadio]
  );

  return (
    <>
      {selectedRadio &&
        unselectedRadios.map((radio, i) => (
          <Polyline
            positions={[
              [parseFloat(radio.Position.Lat), parseFloat(radio.Position.Lon)],
              [
                parseFloat(selectedRadio.Position.Lat),
                parseFloat(selectedRadio.Position.Lon),
              ],
            ]}
            key={i}
            weight={2}
            color="#888"
            dashArray="10"
          />
        ))}
    </>
  );
};

export default RadioDistanceLayer;
