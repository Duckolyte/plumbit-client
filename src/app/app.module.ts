import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialRowComponent} from './display/list/row/material-row/material-row.component';
import {WorkDescriptionRowComponent} from './display/list/row/work-description-row/work-description-row.component';
import {CountComponent} from './display/input/material/count/count.component';
import {UnitComponent} from './display/input/material/unit/unit.component';
import {NameComponent} from './display/input/material/name/name.component';
import {FormsModule} from '@angular/forms';
import {GenericListComponent} from './display/list/material-list/generic-list.component';
import {OrderViewComponent} from './display/order-view/order-view.component';
import {GenericEditRowComponent} from './display/list/row/generic-edit-row/generic-edit-row.component';
import {RowTemplateDirective} from './display/list/row/row-template-directive';
import {DescriptionComponent} from './display/input/work-description/description/description.component';
import { EditButtonComponent } from './display/button/edit-button/edit-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './route/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MaterialRowComponent,
    WorkDescriptionRowComponent,
    CountComponent,
    UnitComponent,
    NameComponent,
    GenericListComponent,
    OrderViewComponent,
    GenericEditRowComponent,
    RowTemplateDirective,
    DescriptionComponent,
    EditButtonComponent
  ],
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
