import { ReactElement } from 'react';

export interface ITableColumn {
  name: string;
  width: number;
}

export type ITableCell = (string | ReactElement)[];

export interface ITableRow {
  fields: ITableCell[];
  value: any;
}
