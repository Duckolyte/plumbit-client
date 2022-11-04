import {CrudService} from '../../../data/service/crud-service';

export interface ServableRow {
  getService(): CrudService<any>;
}
