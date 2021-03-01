import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { divIcon } from 'leaflet';

export const renderMarker = (markerComponent: ReactElement) => {
  return divIcon({
    html: renderToString(markerComponent),
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });
};
