import { TestBed } from '@angular/core/testing';

import { QuizdataService } from './quizdata.service';

describe('QuizdataService', () => {
  let service: QuizdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
