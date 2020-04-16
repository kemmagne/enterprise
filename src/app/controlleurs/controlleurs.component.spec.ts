import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlleursComponent } from './controlleurs.component';

describe('ControlleursComponent', () => {
  let component: ControlleursComponent;
  let fixture: ComponentFixture<ControlleursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlleursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
