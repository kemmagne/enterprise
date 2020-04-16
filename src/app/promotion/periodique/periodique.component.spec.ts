import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodiqueComponent } from './periodique.component';

describe('PeriodiqueComponent', () => {
  let component: PeriodiqueComponent;
  let fixture: ComponentFixture<PeriodiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
