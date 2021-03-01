import '../scss/marker.scss';
import { IRadio } from '../types/radioTypes';
import { getColorFromPercentage } from '../util/getColorFromPercentage';
import TypePortable from '@material-ui/icons/LocalShipping';
import TypeCar from '@material-ui/icons/PhoneAndroid';
import TypeBaseStation from '@material-ui/icons/Storage';
import WorkingModeData from '@material-ui/icons/RssFeed';
import WorkingModeVoice from '@material-ui/icons/PhoneInTalk';
import WorkingModeIdle from '@material-ui/icons/Snooze';

interface MapMarkerProps {
  radio: IRadio;
  selected: boolean;
}

const MapMarker = ({ radio, selected }: MapMarkerProps) => {
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
      className={`marker ${selected ? 'marker--selected' : ''}`}
      style={{
        background: !selected ? getColorFromPercentage(health) : '',
      }}
    >
      {getTypeIcon(radio.Type)}
    </span>
  );
};

export default MapMarker;
