import {WorkDescription} from '../work-description/work-description';
import {Material} from '../material/material';

export interface Order {
  id: string;
  materials: Material[];
  steps: WorkDescription[];
}
