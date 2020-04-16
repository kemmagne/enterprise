import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanditativeComponent } from './quanditative.component';

describe('QuanditativeComponent', () => {
  let component: QuanditativeComponent;
  let fixture: ComponentFixture<QuanditativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanditativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanditativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
