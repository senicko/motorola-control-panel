import '../scss/marker.scss';
import { IRadio } from '../types/radioTypes';

interface MapMarkerProps {
  radio: IRadio;
}

const MapMarker = ({ radio }: MapMarkerProps) => {
  return <span className="marker">{radio.Name}</span>;
};

export default MapMarker;
