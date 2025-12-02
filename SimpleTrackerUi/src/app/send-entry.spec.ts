import { TestBed } from '@angular/core/testing';

import { SendEntry } from './send-entry';

describe('SendEntry', () => {
  let service: SendEntry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEntry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
