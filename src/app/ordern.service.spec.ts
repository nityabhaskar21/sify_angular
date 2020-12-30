import { TestBed } from '@angular/core/testing';

import { OrdernService } from './ordern.service';

describe('OrdernService', () => {
  let service: OrdernService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdernService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
