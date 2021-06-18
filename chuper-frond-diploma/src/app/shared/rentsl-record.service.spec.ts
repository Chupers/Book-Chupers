import { TestBed } from '@angular/core/testing';

import { RentslRecordService } from './rentsl-record.service';

describe('RentslRecordService', () => {
  let service: RentslRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentslRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
