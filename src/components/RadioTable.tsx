import { useMemo, useContext, useState, useEffect } from 'react';
import { RadioContext } from '../context/radioContext';
import { IRadio } from '../types/radioTypes';
import Table from './Table';

const RadioTable = () => {
  const { radios, setSelectedRadioId } = useContext(RadioContext);

  // Declare table columns titles
  const columns = [
    { name: 'ID', width: 100 },
    { name: 'Name', width: 150 },
    { name: 'Type', width: 150 },
    { name: 'SerialNumber', width: 300 },
    { name: 'Strength', width: 150 },
    { name: 'Battery Level', width: 150 },
    { name: 'Working Mode', width: 150 },
  ];

  // Convert radios to table row format
  const rows = useMemo(
    () =>
      radios.reduce(
        (acc, curr) => [
          ...acc,
          {
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
          },
        ],
        [] as any[]
      ),
    [radios]
  );

  return (
    <Table
      columns={columns}
      rows={rows}
      onRowClick={(value: IRadio) => setSelectedRadioId!(value.Id)}
    />
  );
};

export default RadioTable;
