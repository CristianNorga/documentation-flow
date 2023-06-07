import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNodeComponentComponent } from './form-node-component.component';

describe('FormNodeComponentComponent', () => {
  let component: FormNodeComponentComponent;
  let fixture: ComponentFixture<FormNodeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNodeComponentComponent]
    });
    fixture = TestBed.createComponent(FormNodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
