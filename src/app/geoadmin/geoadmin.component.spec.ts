import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoadminComponent } from './geoadmin.component';

describe('GeoadminComponent', () => {
  let component: GeoadminComponent;
  let fixture: ComponentFixture<GeoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
