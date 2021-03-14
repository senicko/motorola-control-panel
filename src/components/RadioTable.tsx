import '../scss/radioTable.scss';
import { useContext } from 'react';
import Table from './Table';
import { RadioContext } from '../context/radioContext';
import { IRadio } from '../types/radioTypes';
import { ITableHeader } from '../types/tableTypes';
import {
  batteryIconFactory,
  strengthIconFactory,
  typeIconFactory,
  workingModeIconFactory,
} from '../util/icons';

// Headers for table
const headers: ITableHeader[] = [
  {
    title: 'Id',
    key: 'Id',
  },
  {
    title: 'Name',
    key: 'Name',
  },
  {
    title: 'Serial Number',
    key: 'SerialNumber',
  },
  {
    title: 'Type',
    key: 'Type',
    componentFactory: typeIconFactory,
  },
  {
    title: 'Strength',
    key: 'Strength',
    componentFactory: strengthIconFactory,
  },
  {
    title: 'Battery Level',
    key: 'BatteryLevel',
    componentFactory: batteryIconFactory,
  },
  {
    title: 'Working Mode',
    key: 'WorkingMode',
    componentFactory: workingModeIconFactory,
  },
];

const RadioTable = () => {
  // Get radios data from Context
  const { radios, setSelectedRadioId, selectedRadio } = useContext(
    RadioContext
  );

  return (
    <section className="radio-table">
      <Table
        headers={headers}
        rows={radios}
        compareWith="Id"
        selected={selectedRadio}
        onRowClick={(value: IRadio) => setSelectedRadioId!(value.Id)}
      />
    </section>
  );
};

export default RadioTable;
