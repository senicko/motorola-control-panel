import '../scss/table.scss';
import { FC } from 'react';
import { useTable } from '../hooks/useTable';
import { ReactComponent as ASC } from '../sort-asc.svg';
import { ReactComponent as DESC } from '../sort-desc.svg';
import { ReactComponent as DEFAULT } from '../sort-default.svg';
import { IRadio } from '../types/radioTypes';
import { ITableHeader } from '../types/tableTypes';
import { getKeyValue } from '../util/object';

interface TableProps {
  headers: ITableHeader[];
  rows: IRadio[];
  onRowClick: (value: IRadio) => void;
  compareWith: string;
  selected: IRadio | undefined;
}

const Table: FC<TableProps> = ({
  headers,
  rows,
  onRowClick,
  compareWith,
  selected,
}) => {
  // Use hook for sorting table content
  const { sorted, asc, key, handleKeyChange } = useTable({ rows, headers });

  const renderCell = (row: IRadio, column: ITableHeader) => {
    // If coumn have componentFactory get it's component
    if (column.componentFactory) return column.componentFactory(row);
    // Otherwise field value
    return getKeyValue(row, column.key);
  };

  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__header-row table__row--header">
          {headers.map((header, i) => (
            <th
              onClick={() => handleKeyChange(header)}
              key={i}
              className="table__cell table__cell--header"
            >
              {header.title}
              {header.key === key ? asc ? <ASC /> : <DESC /> : <DEFAULT />}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {sorted.map((row, i: number) => (
          <tr
            key={i}
            onClick={() => onRowClick(row)}
            className={`table__row ${
              selected &&
              getKeyValue(selected, compareWith) ===
                getKeyValue(row, compareWith)
                ? 'table__row--selected'
                : ''
            }`}
          >
            {headers.map((column, i) => (
              <td key={i} className="table__cell">
                {renderCell(row, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
