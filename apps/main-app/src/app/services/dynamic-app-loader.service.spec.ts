import { TestBed } from '@angular/core/testing';

import { DynamicAppLoaderService } from './dynamic-app-loader.service';

describe('DynamicAppLoaderService', () => {
  let service: DynamicAppLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicAppLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
