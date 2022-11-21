import { TestBed } from '@angular/core/testing';

import { ActiveServiceConfigService } from './active-service-config.service';

describe('ActiveServiceConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveServiceConfigService = TestBed.get(ActiveServiceConfigService);
    expect(service).toBeTruthy();
  });
});
