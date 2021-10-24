import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialRowComponent } from './util/list/row/material-row/material-row.component';
import { WorkDescriptionComponent } from './util/list/row/work-description/work-description.component';
import { CountComponent } from './util/input/material/count/count.component';
import { UnitComponent } from './util/input/material/unit/unit.component';
import { NameComponent } from './util/input/material/name/name.component';
import {FormsModule} from '@angular/forms';
import { MaterialListComponent } from './util/list/material-list/material-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialRowComponent,
    WorkDescriptionComponent,
    CountComponent,
    UnitComponent,
    NameComponent,
    MaterialListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
