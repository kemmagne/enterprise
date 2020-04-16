import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciauxlistComponent } from './commerciauxlist.component';

describe('CommerciauxlistComponent', () => {
  let component: CommerciauxlistComponent;
  let fixture: ComponentFixture<CommerciauxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerciauxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciauxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
