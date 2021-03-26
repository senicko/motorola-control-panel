import { render, screen, waitFor } from '@testing-library/react';
import MapMarker from './MapMarker';
import { IRadio } from '../types/radioTypes';
import { getColorFromPercentage } from '../util/icons';

// device
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

// Get "health" of the device
const health = (radio.BatteryLevel + radio.Strength * 10) / 2;

test('Renders MapMarker properly', async () => {
  // Render component
  render(<MapMarker selectedRadio={undefined} radio={radio} />);
  // Check if rendered
  expect(screen.getByTestId('test-marker')).toBeTruthy();
  // Check if it's background color
  expect(screen.getByTestId('test-marker')).toHaveStyle({
    background: getColorFromPercentage(health),
  });
});

test('Renders MapMarker properly when selected', () => {
  // Render
  render(<MapMarker selectedRadio={radio} radio={radio} />);
  // Check if rendered
  expect(screen.getByTestId('test-marker')).toBeTruthy();
  // Check if it's background color
  expect(screen.getByTestId('test-marker')).toHaveClass('marker--selected');
});
