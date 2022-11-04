import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericEditRowComponent } from './generic-edit-row.component';

describe('GenericEditRowComponent', () => {
  let component: GenericEditRowComponent;
  let fixture: ComponentFixture<GenericEditRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericEditRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
