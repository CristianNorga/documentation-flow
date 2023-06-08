import { TestBed } from '@angular/core/testing';

import { DrawFlowService } from './draw-flow.service';

describe('DrawFlowService', () => {
  let service: DrawFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
