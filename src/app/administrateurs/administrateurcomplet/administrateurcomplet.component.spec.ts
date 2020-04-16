import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurcompletComponent } from './administrateurcomplet.component';

describe('AdministrateurcompletComponent', () => {
  let component: AdministrateurcompletComponent;
  let fixture: ComponentFixture<AdministrateurcompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurcompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurcompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
