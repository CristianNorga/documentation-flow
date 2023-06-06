import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeComponentComponent } from './node-component.component';

describe('NodeComponentComponent', () => {
  let component: NodeComponentComponent;
  let fixture: ComponentFixture<NodeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeComponentComponent]
    });
    fixture = TestBed.createComponent(NodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
