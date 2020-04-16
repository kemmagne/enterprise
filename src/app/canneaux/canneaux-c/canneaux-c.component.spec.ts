import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanneauxCComponent } from './canneaux-c.component';

describe('CanneauxCComponent', () => {
  let component: CanneauxCComponent;
  let fixture: ComponentFixture<CanneauxCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanneauxCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanneauxCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
