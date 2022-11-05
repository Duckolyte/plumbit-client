import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedListComponent } from './typed-list.component';

describe('MaterialListComponent', () => {
  let component: TypedListComponent;
  let fixture: ComponentFixture<TypedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
