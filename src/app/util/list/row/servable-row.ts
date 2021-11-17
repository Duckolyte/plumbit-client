import {CrudService} from '../../../service/crud-service';

export interface ServableRow {
  getService(): CrudService<any>;
}
