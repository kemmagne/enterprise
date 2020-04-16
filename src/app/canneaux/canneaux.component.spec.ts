import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanneauxComponent } from './canneaux.component';

describe('CanneauxComponent', () => {
  let component: CanneauxComponent;
  let fixture: ComponentFixture<CanneauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanneauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
