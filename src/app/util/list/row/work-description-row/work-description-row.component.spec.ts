import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDescriptionRowComponent } from './work-description-row.component';

describe('WorkDescriptionComponent', () => {
  let component: WorkDescriptionRowComponent;
  let fixture: ComponentFixture<WorkDescriptionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDescriptionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDescriptionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
