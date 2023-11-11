import { TestBed } from '@angular/core/testing';

import { FacadeProductService } from './facade-product.service';

describe('FacadeProductService', () => {
  let service: FacadeProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
