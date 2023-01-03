import { TestBed } from '@angular/core/testing';

import { PlateNumbersService } from './plate-numbers.service';

describe('PlateNumbersService', () => {
  let service: PlateNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
