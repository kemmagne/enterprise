import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerciauxcompleteComponent } from './commerciauxcomplete.component';

describe('CommerciauxcompleteComponent', () => {
  let component: CommerciauxcompleteComponent;
  let fixture: ComponentFixture<CommerciauxcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerciauxcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerciauxcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
