import { TestBed } from '@angular/core/testing';

import { DataStaticsService } from './data-statics.service';

describe('DataStaticsService', () => {
  let service: DataStaticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataStaticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
