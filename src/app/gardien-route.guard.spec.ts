import { TestBed } from '@angular/core/testing';

import { GardienRouteGuard } from './gardien-route.guard';

describe('GardienRouteGuard', () => {
  let guard: GardienRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GardienRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
