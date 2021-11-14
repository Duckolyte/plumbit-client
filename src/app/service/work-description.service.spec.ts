import { TestBed } from '@angular/core/testing';

import { WorkDescriptionService } from './work-description.service';

describe('WorkDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkDescriptionService = TestBed.get(WorkDescriptionService);
    expect(service).toBeTruthy();
  });
});
