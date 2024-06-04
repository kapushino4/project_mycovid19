import { TestBed } from '@angular/core/testing';

import { CovidsService } from './covids.service';

describe('CovidsService', () => {
  let service: CovidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
