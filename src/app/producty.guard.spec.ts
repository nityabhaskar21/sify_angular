import { TestBed } from '@angular/core/testing';

import { ProductyGuard } from './producty.guard';

describe('ProductyGuard', () => {
  let guard: ProductyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
