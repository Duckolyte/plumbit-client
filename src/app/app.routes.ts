import {RouterModule, Routes} from '@angular/router';

import {StepsComponent} from './route/steps/steps.component';
import {MaterialsComponent} from './route/materials/materials.component';
import {OrdersComponent} from './route/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'steps',
    component: StepsComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
