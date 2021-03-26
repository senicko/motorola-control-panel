import { IRadio } from '../types/radioTypes';
import {
  strengthIconFactory,
  batteryIconFactory,
  workingModeIconFactory,
  typeIconFactory,
  getColorFromPercentage,
} from './icons';

const radio: IRadio = {
  Id: 1,
  Name: 'KR 1',
  Type: 'BaseStation',
  SerialNumber: '5254-0886-4959-00001',
  Strength: 10,
  BatteryLevel: 100,
  WorkingMode: 'Data',
  Position: { Lat: '50.062', Lon: '19.906' },
};

test('Gets strength icon properly', () => {
  expect(strengthIconFactory(radio)).toBeTruthy();
});

test('Gets battery icon properly', () => {
  expect(batteryIconFactory(radio)).toBeTruthy();
});

test('Gets working mode icon properly', () => {
  expect(workingModeIconFactory(radio)).toBeTruthy();
});

test('Gets type icon properly', () => {
  expect(typeIconFactory(radio)).toBeTruthy();
});
