import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanditaitiveComponent } from './quanditaitive.component';

describe('QuanditaitiveComponent', () => {
  let component: QuanditaitiveComponent;
  let fixture: ComponentFixture<QuanditaitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanditaitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanditaitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
