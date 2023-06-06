import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesTemplateComponent } from './nodes-template.component';

describe('NodesTemplateComponent', () => {
  let component: NodesTemplateComponent;
  let fixture: ComponentFixture<NodesTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodesTemplateComponent]
    });
    fixture = TestBed.createComponent(NodesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
