import '../scss/marker.scss';
import { IRadio } from '../types/radioTypes';
import { getColorFromPercentage } from '../util/getColorFromPercentage';
import TypePortable from '@material-ui/icons/LocalShipping';
import TypeCar from '@material-ui/icons/PhoneAndroid';
import TypeBaseStation from '@material-ui/icons/Storage';
import { parseRadioPosition } from '../util/parseRadioPosition';

interface MapMarkerProps {
  radio: IRadio;
  selectedRadio: IRadio | undefined;
}

const MapMarker = ({ radio, selectedRadio }: MapMarkerProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Portable':
        return <TypePortable />;
      case 'Car':
        return <TypeCar />;
      case 'BaseStation':
        return <TypeBaseStation />;
    }
  };

  const health = (radio.BatteryLevel + radio.Strength * 10) / 2;

  return (
    <span
      className={`marker ${
        selectedRadio?.Id === radio.Id ? 'marker--selected' : ''
      }`}
      style={{
        background:
          selectedRadio?.Id !== radio.Id ? getColorFromPercentage(health) : '',
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
      {getTypeIcon(radio.Type)}
    </span>
  );
};

export default MapMarker;
