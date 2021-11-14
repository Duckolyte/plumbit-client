import {RowData} from '../row-data';
import {Material} from '../../../../model/material/material';

export interface MaterialRowData extends RowData {
  material: Material;
}
