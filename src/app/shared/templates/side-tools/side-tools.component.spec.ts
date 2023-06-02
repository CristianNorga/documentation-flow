import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideToolsComponent } from './side-tools.component';

describe('SideToolsComponent', () => {
  let component: SideToolsComponent;
  let fixture: ComponentFixture<SideToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideToolsComponent]
    });
    fixture = TestBed.createComponent(SideToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
