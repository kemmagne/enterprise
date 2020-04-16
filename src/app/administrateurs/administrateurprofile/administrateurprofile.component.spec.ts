import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurprofileComponent } from './administrateurprofile.component';

describe('AdministrateurprofileComponent', () => {
  let component: AdministrateurprofileComponent;
  let fixture: ComponentFixture<AdministrateurprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
