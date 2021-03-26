import '../scss/marker.scss';
import { IRadio } from '../types/radioTypes';
import { getColorFromPercentage } from '../util/icons';
import { parseRadioPosition } from '../util/parseRadioPosition';
import { typeIconFactory } from '../util/icons';

interface MapMarkerProps {
  radio: IRadio;
  selectedRadio: IRadio | undefined;
}

const MapMarker = ({ radio, selectedRadio }: MapMarkerProps) => {
  // Get health value
  const health = (radio.BatteryLevel + radio.Strength * 10) / 2;
  // Get device health color
  const deviceHealthColor =
    selectedRadio?.Id !== radio.Id ? getColorFromPercentage(health) : '';

  return (
    <span
      data-testid="test-marker"
      className={`marker ${
        selectedRadio?.Id === radio.Id ? 'marker--selected' : ''
      }`}
      style={{
        background: deviceHealthColor,
        boxShadow: `0 0 25px -5px ${deviceHealthColor}`,
      }}
    >
      {selectedRadio && selectedRadio.Id !== radio.Id && (
        <div className="marker__distance">
          {(
            parseRadioPosition(radio).distanceTo(
              parseRadioPosition(selectedRadio)
            ) / 1000
          ).toFixed(2)}{' '}
          km
        </div>
      )}
      {typeIconFactory(radio)}
    </span>
  );
};

export default MapMarker;
