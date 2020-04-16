import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurlistComponent } from './administrateurlist.component';

describe('AdministrateurlistComponent', () => {
  let component: AdministrateurlistComponent;
  let fixture: ComponentFixture<AdministrateurlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
