import { TestBed } from '@angular/core/testing';

import { JugarService } from './jugar.service';

describe('JugarService', () => {
  let service: JugarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
