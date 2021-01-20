import { TestBed } from '@angular/core/testing';

import { RoofStockService } from './roof-stock.service';

describe('RoofStockService', () => {
  let service: RoofStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoofStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
