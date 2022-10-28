import { Routes, RouterModule } from '@angular/router';

import { OrderViewComponent } from './view/order-view/order-view.component';

const routes: Routes = [
  {
    path: '',
    component: OrderViewComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
