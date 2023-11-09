import { TestBed } from '@angular/core/testing';

import { DeveloppementService } from './developpement.service';

describe('DeveloppementService', () => {
  let service: DeveloppementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloppementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
