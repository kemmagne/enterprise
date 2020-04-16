import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciauxnameComponent } from './commerciauxname.component';

describe('CommerciauxnameComponent', () => {
  let component: CommerciauxnameComponent;
  let fixture: ComponentFixture<CommerciauxnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerciauxnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciauxnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
