import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesTemplatesComponent } from './nodes-tools.component';

describe('NodesTemplatesComponent', () => {
  let component: NodesTemplatesComponent;
  let fixture: ComponentFixture<NodesTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodesTemplatesComponent]
    });
    fixture = TestBed.createComponent(NodesTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
