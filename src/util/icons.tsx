import { IRadio } from '../types/radioTypes';

// Radio type icons
import TypePortable from '@material-ui/icons/LocalShipping';
import TypeCar from '@material-ui/icons/PhoneAndroid';
import TypeBaseStation from '@material-ui/icons/Storage';

// Network strength icons
import Connection1 from '@material-ui/icons/SignalCellular0Bar';
import Connection2 from '@material-ui/icons/SignalCellular1Bar';
import Connection3 from '@material-ui/icons/SignalCellular2Bar';
import Connection4 from '@material-ui/icons/SignalCellular3Bar';
import Connection5 from '@material-ui/icons/SignalCellular4Bar';

// Battery level icons
import Battery1 from '@material-ui/icons/Battery20';
import Battery2 from '@material-ui/icons/Battery50';
import Battery3 from '@material-ui/icons/Battery60';
import Battery4 from '@material-ui/icons/Battery90';
import Battery5 from '@material-ui/icons/BatteryFull';

// Working mode icons
import Voice from '@material-ui/icons/Phone';
import Data from '@material-ui/icons/TapAndPlay';
import Idle from '@material-ui/icons/Snooze';

// Gettign color from percentage
export const getColorFromPercentage = (percentage: number): string => {
  // Return hsl for this percentage (100 - green, 0 - red)
  return `hsl(${percentage}, 80%, 50%)`;
};

// Type icon factory
export const typeIconFactory = (radio: IRadio) => {
  switch (radio.Type) {
    case 'Portable':
      return <TypePortable />;
    case 'Car':
      return <TypeCar />;
    case 'BaseStation':
      return <TypeBaseStation />;
    default:
      return <span></span>;
  }
};

// Working mode icon factory
export const workingModeIconFactory = (radio: IRadio) => {
  switch (radio.WorkingMode) {
    case 'Data':
      return <Data />;
    case 'Idle':
      return <Idle />;
    case 'Voice':
      return <Voice />;
    default:
      return <span></span>;
  }
};

// Order icons from low to high
const strengthIconOrder = [
  Connection1,
  Connection2,
  Connection3,
  Connection4,
  Connection5,
];

// Strength icon factory
export const strengthIconFactory = (radio: IRadio) => {
  // Get color for network strength
  const color = getColorFromPercentage(radio.Strength * 10);

  // Get proper icon
  const Icon =
    strengthIconOrder[Math.max(Math.ceil(radio.Strength / 2) - 1, 0)];

  // Return icon
  return <Icon style={{ color }} />;
};

// Order icons from low to high
const batteryIconOrder = [Battery1, Battery2, Battery3, Battery4, Battery5];

// Battery Icon Factory
export const batteryIconFactory = (radio: IRadio) => {
  // Get color for battery level
  const color = getColorFromPercentage(radio.BatteryLevel);
  // Get proper icon
  const Icon = batteryIconOrder[Math.ceil(radio.BatteryLevel / 20) - 1];

  // Return icon
  return <Icon style={{ color }} />;
};
