import { TestBed } from '@angular/core/testing';

import { FacadeStockService } from './facade-stock.service';

describe('FacadeStockService', () => {
  let service: FacadeStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
