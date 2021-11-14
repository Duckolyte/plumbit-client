import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  private lang = 'english';

  menuItems = [
    'delete'
  ];

  private locale = {
    english: 'Edit',
    deutsch: 'Menu',
    francais: 'éditer'
  };

  label = '';

  constructor() {
  }

  ngOnInit() {
    for (const localeKey in this.locale) {
      if (localeKey === this.lang) {
        this.label = this.locale[localeKey];
      }
    }
  }

  openMenu(): void {
    this.trigger.openMenu();
  }

}
