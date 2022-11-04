import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';
import {RowItem} from '../../list/row/row-item';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent<T extends RowItem> implements OnInit {

  @Input()
  rowItem: T;

  // @ts-ignore
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  private lang = 'english';

  menuItems = [
    {
      label: 'Delete',
      action: (rowItem) => rowItem.getService().delete(rowItem)
    }
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

}
