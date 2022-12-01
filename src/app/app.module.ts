import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Type} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialRowComponent} from './display/list/row/material-row/material-row.component';
import {WorkDescriptionRowComponent} from './display/list/row/work-description-row/work-description-row.component';
import {CountComponent} from './display/input/material/count/count.component';
import {UnitComponent} from './display/input/material/unit/unit.component';
import {NameComponent} from './display/input/material/name/name.component';
import {FormsModule} from '@angular/forms';
import {GenericEditRowComponent} from './display/list/row/generic-edit-row/generic-edit-row.component';
import {RowTemplateDirective} from './display/list/row/row-template-directive';
import {DescriptionComponent} from './display/input/work-description/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule, MatGridListModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import { MaterialsComponent } from './route/materials/materials.component';
import { StepsComponent } from './route/steps/steps.component';
import { OrdersComponent } from './route/orders/orders.component';
import { OrderListComponent } from './display/list/order-list/order-list.component';
import { FilterComponent } from './display/filter/filter.component';
import { OrderItemListComponent } from './display/list/order-item-list/order-item-list.component';
import {Material} from './data/model/material/material';
import {WorkDescription} from './data/model/work-description/work-description';
import {WorkDescriptionService} from './data/service/work-description.service';
import {MaterialService} from './data/service/material.service';
import {ActiveServiceConfigService} from './data/service/active-service-config.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialRowComponent,
    WorkDescriptionRowComponent,
    CountComponent,
    UnitComponent,
    NameComponent,
    GenericEditRowComponent,
    RowTemplateDirective,
    DescriptionComponent,
    MaterialsComponent,
    StepsComponent,
    OrdersComponent,
    OrderListComponent,
    FilterComponent,
    OrderItemListComponent],
  entryComponents: [
    MaterialRowComponent,
    WorkDescriptionRowComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        AppRoutes,
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        MatListModule
    ],
  providers: [
    MaterialService,
    WorkDescriptionService,
    {
      provide: 'OrderItemService', useFactory: (config: ActiveServiceConfigService) => {
        switch (config.activeServiceConfig.activeViewType) {
          case Material:
            return new MaterialService();
          case WorkDescription:
            return new WorkDescriptionService();
          default:
            throw new Error(
              `Error creating OrderItemService of type ${config.activeServiceConfig.activeViewType.name}. Type not supported.`);
        }
      },
      deps: [ActiveServiceConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
