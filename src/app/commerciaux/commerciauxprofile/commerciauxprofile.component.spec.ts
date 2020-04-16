import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciauxprofileComponent } from './commerciauxprofile.component';

describe('CommerciauxprofileComponent', () => {
  let component: CommerciauxprofileComponent;
  let fixture: ComponentFixture<CommerciauxprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerciauxprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciauxprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
