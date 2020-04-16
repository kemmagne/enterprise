import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurnameComponent } from './administrateurname.component';

describe('AdministrateurnameComponent', () => {
  let component: AdministrateurnameComponent;
  let fixture: ComponentFixture<AdministrateurnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
