import { ReactElement } from 'react';

export interface TableColumn {
  name: string;
  width: number;
}

export type TableCell = (string | ReactElement)[];

export interface TableRow {
  fields: TableCell[];
  value: any;
}
