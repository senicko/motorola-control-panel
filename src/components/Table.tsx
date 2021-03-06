import '../scss/table.scss';
import { FunctionComponent, useState } from 'react';
import { ITableColumn, ITableRow } from '../types/tableTypes';

interface TableProps {
  columns: ITableColumn[];
  rows: ITableRow[];
  onRowClick: (value: any) => void;
}

const Table: FunctionComponent<TableProps> = ({
  columns,
  rows,
  onRowClick,
}) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (
    <section className="table">
      <header className="table__header">
        {columns &&
          columns.map((column, i) => (
            <div
              className="table__cell"
              style={{ width: `${column.width}px` }}
              key={i}
            >
              {column.name}
            </div>
          ))}
      </header>
      {rows &&
        rows.map((row, i) => (
          <div
            className={`table__row ${
              selectedRow === i ? 'table__row--selected' : ''
            }`}
            onClick={() => {
              onRowClick(row.value);
              setSelectedRow(i);
            }}
            key={i}
          >
            {row.fields.map((value, i) => (
              <div
                className="table__cell"
                style={{ width: columns[i].width }}
                key={i}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
    </section>
  );
};

export default Table;
