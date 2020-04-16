import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanneauxPComponent } from './canneaux-p.component';

describe('CanneauxPComponent', () => {
  let component: CanneauxPComponent;
  let fixture: ComponentFixture<CanneauxPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanneauxPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanneauxPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
