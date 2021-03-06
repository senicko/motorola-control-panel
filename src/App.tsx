import './scss/index.scss';
import Map from './components/Map';
import Table from './components/Table';
import { useContext, useMemo } from 'react';
import { RadioContext } from './context/radioContext';
import { IRadio } from './types/radioTypes';

function App() {
  const { radios, setSelectedRadioId } = useContext(RadioContext);

  const radiosRows = useMemo(
    () =>
      radios.reduce((acc, curr) => {
        acc.push({
          fields: [
            curr.Id,
            curr.Name,
            curr.Type,
            curr.SerialNumber,
            curr.Strength,
            curr.BatteryLevel,
            curr.WorkingMode,
          ],
          value: curr,
        });
        return acc;
      }, [] as any[]),
    [radios]
  );

  const columns = [
    { name: 'ID', width: 100 },
    { name: 'Name', width: 150 },
    { name: 'Type', width: 150 },
    { name: 'SerialNumber', width: 300 },
    { name: 'Strength', width: 150 },
    { name: 'Battery Level', width: 150 },
    { name: 'Working Mode', width: 150 },
  ];

  return (
    <div className="App">
      <Map />
      <Table
        columns={columns}
        rows={radiosRows}
        onRowClick={(value: IRadio) => setSelectedRadioId!(value.Id)}
      />
    </div>
  );
}

export default App;
