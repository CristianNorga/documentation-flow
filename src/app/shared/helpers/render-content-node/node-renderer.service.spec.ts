import { TestBed } from '@angular/core/testing';

import { NodeRendererService } from './node-renderer.service';

describe('NodeRendererService', () => {
  let service: NodeRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
