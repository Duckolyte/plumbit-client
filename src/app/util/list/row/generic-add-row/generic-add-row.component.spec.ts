import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAddRowComponent } from './generic-add-row.component';

describe('GenericAddRowComponent', () => {
  let component: GenericAddRowComponent;
  let fixture: ComponentFixture<GenericAddRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAddRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
