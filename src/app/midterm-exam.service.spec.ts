import { TestBed } from '@angular/core/testing';

import { ServiceService } from './midterm-exam.service';

describe('MidtermExamService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});