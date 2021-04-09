import { TestBed } from '@angular/core/testing';

import { ApiwebService } from './apiweb.service';

describe('ApiwebService', () => {
  let service: ApiwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
