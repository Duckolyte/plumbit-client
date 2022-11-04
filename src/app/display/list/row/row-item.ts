import {Type} from '@angular/core';
import {RowData} from './row-data';

export class RowItem {
  constructor(public component: Type<any>, public rowData: RowData) {
  }
}
