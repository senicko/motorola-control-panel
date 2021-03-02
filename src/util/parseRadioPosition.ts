import { IRadio } from '../types/radioTypes';
import { latLng } from 'leaflet';

export const parseRadioPosition = (radio: IRadio) =>
  latLng(parseFloat(radio.Position.Lat), parseFloat(radio.Position.Lon));
