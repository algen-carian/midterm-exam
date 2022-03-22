import { TestBed } from '@angular/core/testing';

import { MidtermExamService } from './midterm-exam.service';

describe('MidtermExamService', () => {
  let service: MidtermExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidtermExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
