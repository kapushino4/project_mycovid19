import { TestBed } from '@angular/core/testing';

import { UseMocksService } from './use-mocks.service';

describe('UseMocksService', () => {
  let service: UseMocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseMocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
