import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialRowComponent} from './util/list/row/material-row/material-row.component';
import {WorkDescriptionRowComponent} from './util/list/row/work-description-row/work-description-row.component';
import {CountComponent} from './util/input/material/count/count.component';
import {UnitComponent} from './util/input/material/unit/unit.component';
import {NameComponent} from './util/input/material/name/name.component';
import {FormsModule} from '@angular/forms';
import {GenericListComponent} from './util/list/material-list/generic-list.component';
import {OrderViewComponent} from './view/order-view/order-view.component';
import {GenericEditRowComponent} from './util/list/row/generic-edit-row/generic-edit-row.component';
import {RowTemplateDirective} from './util/list/row/row-template-directive';
import {DescriptionComponent} from './util/input/work-description/description/description.component';
import { EditButtonComponent } from './util/button/edit-button/edit-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule} from '@angular/material';

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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
