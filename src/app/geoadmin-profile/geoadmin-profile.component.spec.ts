import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoadminProfileComponent } from './geoadmin-profile.component';

describe('GeoadminProfileComponent', () => {
  let component: GeoadminProfileComponent;
  let fixture: ComponentFixture<GeoadminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoadminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoadminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
