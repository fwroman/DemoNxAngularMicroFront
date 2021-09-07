import { TestBed } from '@angular/core/testing';

import { RemoteCommunicationService } from './remote-communication.service';

describe('RemoteCommunicationService', () => {
  let service: RemoteCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
