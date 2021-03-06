import { FunctionComponent } from 'react';
import { TableColumn, TableRow } from '../types/tableTypes';
import '../scss/table.scss';

interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  onRowClick: (value: any) => void;
}

const Table: FunctionComponent<TableProps> = ({
  columns,
  rows,
  onRowClick,
}) => {
  return (
    <section className="table">
      <header className="table__header">
        {columns.map((column, i) => (
          <div
            className="table__cell"
            style={{ width: `${column.width}px` }}
            key={i}
          >
            {column.name}
          </div>
        ))}
      </header>
      {rows.map((row, i) => (
        <div
          className="table__row"
          onClick={() => onRowClick(row.value)}
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
