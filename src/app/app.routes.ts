import {RouterModule, Routes} from '@angular/router';

import {StepsComponent} from './route/steps/steps.component';
import {MaterialsComponent} from './route/materials/materials.component';
import {OrdersComponent} from './route/orders/orders.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
  },
  {
    path: '',
    component: OrdersComponent
  },
  { path: '**',
    component: NotFoundComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
