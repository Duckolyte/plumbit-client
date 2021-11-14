import {RowData} from './row-data';

export interface RowComponent<T extends RowData> {
  rowData: T;
}
